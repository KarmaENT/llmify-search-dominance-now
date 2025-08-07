
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Check, Crown, Zap, Shield, Star, CreditCard, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Subscription = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    subscribed: false,
    subscription_tier: null,
    subscription_end: null
  });

  const plans = [
    {
      name: "LLMEO Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses ready to dominate AI search",
      features: [
        "LLM Ranking Optimization (3 keywords)",
        "Basic LLMEO Content Creation", 
        "Monthly Performance Reports",
        "ChatGPT & Claude Optimization",
        "Email Support",
        "Basic Competitor Analysis"
      ],
      tier: "Basic",
      popular: false
    },
    {
      name: "LLMEO Analyst",
      price: "$999",
      period: "/month", 
      description: "Enhanced visibility tracking and basic optimization",
      features: [
        "LLM Ranking Optimization (5 keywords)",
        "Standard LLMEO Content Creation",
        "Bi-weekly Performance Reports",
        "ChatGPT & Claude Optimization",
        "Email Support",
        "Standard Competitor Analysis"
      ],
      tier: "Analyst",
      popular: false,
      isDecoy: true
    },
    {
      name: "LLMEO Elite", 
      price: "$1,499",
      period: "/month",
      description: "For growing businesses serious about market leadership",
      features: [
        "LLM Ranking Optimization (10 keywords)",
        "Advanced LLMEO Content Strategy",
        "Weekly Performance Monitoring", 
        "All Major AI Platform Optimization",
        "Priority Phone & Email Support",
        "Advanced Competitive Intelligence",
        "Local Market Domination",
        "AI Persona Development",
        "Dashboard Access & Prompt Tracking"
      ],
      tier: "Premium",
      popular: true
    },
    {
      name: "Search Lock Pro",
      price: "$2,999", 
      period: "/month",
      description: "For enterprises demanding total AI search dominance",
      features: [
        "Unlimited LLM Optimization",
        "Complete LLMEO Content Suite",
        "Daily Performance Monitoring",
        "Multi-Platform AI Dominance", 
        "Dedicated Account Manager",
        "Crisis Management & Rep Shield",
        "Industry Authority Positioning",
        "Competitor Suppression Tactics",
        "Custom AI Strategy Development",
        "Full Vertical Dominance Suite",
        "CRM Integrations & Analytics"
      ],
      tier: "Enterprise",
      popular: false
    }
  ];

  useEffect(() => {
    if (user) {
      checkSubscriptionStatus();
    }
  }, [user]);

  const checkSubscriptionStatus = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('check-subscription');
      if (error) throw error;
      
      setSubscriptionStatus({
        subscribed: data.subscribed || false,
        subscription_tier: data.subscription_tier || null,
        subscription_end: data.subscription_end || null
      });
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const handleSubscribe = async (planName: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { planName }
      });

      if (error) throw error;

      if (data.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Error",
        description: "Failed to create checkout session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      
      if (error) throw error;

      if (data.url) {
        // Open customer portal in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Error",
        description: "Failed to open subscription management. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Choose Your
              <span className="gradient-text"> LLMEO Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Invest in your AI search future. Every plan includes our guarantee: Top 3 AI search rankings within 90 days or full refund.
            </p>
          </div>
        </div>
      </section>

      {/* Current Subscription Status */}
      {user && subscriptionStatus.subscribed && (
        <section className="py-8 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Active Plan: {subscriptionStatus.subscription_tier}
                    </h3>
                    <p className="text-slate-400">
                      {subscriptionStatus.subscription_end 
                        ? `Renews on ${new Date(subscriptionStatus.subscription_end).toLocaleDateString()}`
                        : 'Active subscription'
                      }
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleManageSubscription}
                  disabled={loading}
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Plans */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`relative rounded-2xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-slate-900/50 shadow-glow scale-105' 
                    : plan.isDecoy
                      ? 'border-slate-600 bg-slate-900/30 opacity-75 shadow-sm'
                      : 'border-slate-700 bg-slate-900/50 shadow-lg hover:shadow-xl'
                } transition-all duration-300 backdrop-blur-sm`}>
                  
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        Goldilocks Choice
                      </div>
                    </div>
                  )}

                  {plan.isDecoy && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-slate-600 text-slate-300 px-4 py-2 rounded-full text-sm font-medium">
                        Limited Value
                      </div>
                    </div>
                  )}

                  {subscriptionStatus.subscription_tier === plan.tier && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Current Plan
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleSubscribe(plan.name)}
                    disabled={loading || (subscriptionStatus.subscription_tier === plan.tier)}
                    className={`w-full py-3 text-lg font-semibold rounded-xl ${
                      subscriptionStatus.subscription_tier === plan.tier
                        ? 'bg-slate-600 cursor-not-allowed text-slate-400'
                        : plan.popular
                          ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
                    }`}
                  >
                    {subscriptionStatus.subscription_tier === plan.tier ? (
                      <>
                        <Crown className="mr-2 w-5 h-5" />
                        Current Plan
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 w-5 h-5" />
                        {loading ? 'Loading...' : 'Choose This Plan'}
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-bold text-primary">100% Money-Back Guarantee</h4>
              </div>
              <p className="text-slate-300 max-w-2xl mx-auto">
                We're so confident in our LLMEO system that we guarantee top 3 AI search rankings within 90 days. 
                If we don't deliver, you get a full refund - no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;
