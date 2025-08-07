import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const AffiliateTracker: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Check for referral code in URL
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    
    if (refCode && user) {
      trackReferral(refCode);
    }
  }, [user]);

  const trackReferral = async (refCode: string) => {
    try {
      // Check if user was already referred
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('referred_by_code')
        .eq('user_id', user?.id)
        .single();

      // Only track if not already referred
      if (!existingSubscriber?.referred_by_code) {
        // Update subscriber with referral code
        await supabase
          .from('subscribers')
          .upsert({
            user_id: user?.id,
            email: user?.email,
            referred_by_code: refCode,
            subscribed: false
          }, { onConflict: 'email' });

        // Store in localStorage for checkout process
        localStorage.setItem('referralCode', refCode);
      }
    } catch (error) {
      console.error('Error tracking referral:', error);
    }
  };

  return null; // This component doesn't render anything
};

export default AffiliateTracker;