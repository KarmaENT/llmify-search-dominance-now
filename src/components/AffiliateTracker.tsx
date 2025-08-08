import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const AffiliateTracker: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Capture referral code on visit and store for later
    const urlParams = new URLSearchParams(window.location.search);
    const refFromUrl = urlParams.get('ref');

    if (refFromUrl) {
      localStorage.setItem('referralCode', refFromUrl);
    }

    const storedRef = localStorage.getItem('referralCode');
    if (storedRef && user) {
      trackReferral(storedRef);
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
        const { error } = await supabase
          .from('subscribers')
          .upsert({
            user_id: user?.id,
            email: user?.email,
            referred_by_code: refCode,
            subscribed: false
          }, { onConflict: 'email' });

        if (!error) {
          // Clear stored referral since it's now associated
          localStorage.removeItem('referralCode');
        }
      } else {
        // Already referred — clear any stale stored referral
        localStorage.removeItem('referralCode');
      }
    } catch (error) {
      console.error('Error tracking referral:', error);
    }
  };

  return null; // This component doesn't render anything
};

export default AffiliateTracker;