import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[PROCESS-AFFILIATE] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const { subscriptionId, customerId } = await req.json();
    logStep("Processing subscription", { subscriptionId, customerId });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Get subscription details
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
    
    if (!customer.email) {
      throw new Error("Customer email not found");
    }

    logStep("Retrieved subscription and customer", { email: customer.email });

    // Check if this customer was referred
    const { data: subscriber } = await supabaseClient
      .from('subscribers')
      .select('referred_by_code')
      .eq('email', customer.email)
      .single();

    if (!subscriber?.referred_by_code) {
      logStep("No referral code found for customer");
      return new Response(JSON.stringify({ message: "No referral to process" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    logStep("Found referral code", { code: subscriber.referred_by_code });

    // Find the affiliate
    const { data: affiliate } = await supabaseClient
      .from('affiliates')
      .select('*')
      .eq('affiliate_code', subscriber.referred_by_code)
      .single();

    if (!affiliate) {
      throw new Error("Affiliate not found");
    }

    // Calculate commission (40% of subscription amount)
    const subscriptionAmount = subscription.items.data[0].price.unit_amount || 0;
    const commissionAmount = (subscriptionAmount / 100) * (affiliate.commission_rate / 100);

    logStep("Calculated commission", { subscriptionAmount, commissionAmount });

    // Get referred user
    const { data: referredUser } = await supabaseClient.auth.admin.getUserById(
      (await supabaseClient
        .from('subscribers')
        .select('user_id')
        .eq('email', customer.email)
        .single()).data?.user_id || ''
    );

    if (!referredUser.user) {
      throw new Error("Referred user not found");
    }

    // Create referral record
    const { error: referralError } = await supabaseClient
      .from('referrals')
      .insert({
        affiliate_id: affiliate.id,
        referred_user_id: referredUser.user.id,
        subscription_id: subscriptionId,
        commission_amount: commissionAmount,
        subscription_start: new Date(subscription.current_period_start * 1000).toISOString(),
        subscription_end: new Date(subscription.current_period_end * 1000).toISOString(),
        status: 'active'
      });

    if (referralError) throw referralError;

    // Update affiliate totals
    const { error: updateError } = await supabaseClient
      .from('affiliates')
      .update({
        total_referrals: affiliate.total_referrals + 1,
        total_earnings: affiliate.total_earnings + commissionAmount,
        updated_at: new Date().toISOString()
      })
      .eq('id', affiliate.id);

    if (updateError) throw updateError;

    logStep("Successfully processed affiliate commission");

    return new Response(JSON.stringify({ 
      success: true, 
      commissionAmount,
      affiliateCode: affiliate.affiliate_code 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in process-affiliate-commission", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});