-- Create affiliate/referral program tables
CREATE TABLE public.affiliates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  affiliate_code TEXT UNIQUE NOT NULL,
  commission_rate DECIMAL(5,2) NOT NULL DEFAULT 40.00,
  total_referrals INTEGER DEFAULT 0,
  total_earnings DECIMAL(10,2) DEFAULT 0,
  status TEXT CHECK (status IN ('active', 'inactive', 'suspended')) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create referrals table
CREATE TABLE public.referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  affiliate_id UUID REFERENCES public.affiliates(id) ON DELETE CASCADE NOT NULL,
  referred_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  subscription_id TEXT, -- Stripe subscription ID
  commission_amount DECIMAL(10,2),
  commission_paid BOOLEAN DEFAULT false,
  subscription_start TIMESTAMPTZ,
  subscription_end TIMESTAMPTZ,
  status TEXT CHECK (status IN ('pending', 'active', 'cancelled', 'expired')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create subscriber modifications for referral tracking
ALTER TABLE public.subscribers ADD COLUMN referred_by_code TEXT;
ALTER TABLE public.subscribers ADD COLUMN referral_bonus_applied BOOLEAN DEFAULT false;

-- Enable RLS
ALTER TABLE public.affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

-- RLS policies for affiliates
CREATE POLICY "Users can view their own affiliate info" ON public.affiliates
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own affiliate info" ON public.affiliates
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own affiliate info" ON public.affiliates
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS policies for referrals
CREATE POLICY "Affiliates can view their referrals" ON public.referrals
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.affiliates 
      WHERE affiliates.id = referrals.affiliate_id 
      AND affiliates.user_id = auth.uid()
    )
  );

-- Create indexes for performance
CREATE INDEX idx_affiliates_user_id ON public.affiliates(user_id);
CREATE INDEX idx_affiliates_code ON public.affiliates(affiliate_code);
CREATE INDEX idx_referrals_affiliate_id ON public.referrals(affiliate_id);
CREATE INDEX idx_referrals_referred_user_id ON public.referrals(referred_user_id);
CREATE INDEX idx_subscribers_referred_by_code ON public.subscribers(referred_by_code);

-- Function to generate unique affiliate codes
CREATE OR REPLACE FUNCTION public.generate_affiliate_code()
RETURNS TEXT AS $$
BEGIN
  RETURN 'LLM' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8));
END;
$$ LANGUAGE plpgsql;

-- Function to create affiliate account on user signup
CREATE OR REPLACE FUNCTION public.handle_new_affiliate()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.affiliates (user_id, affiliate_code, commission_rate)
  VALUES (NEW.id, public.generate_affiliate_code(), 40.00);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;