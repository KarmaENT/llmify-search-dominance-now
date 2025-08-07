-- Fix security warnings by setting search_path for functions
CREATE OR REPLACE FUNCTION public.generate_affiliate_code()
RETURNS TEXT 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN 'LLM' || UPPER(SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8));
END;
$$;

-- Fix the handle_new_affiliate function
CREATE OR REPLACE FUNCTION public.handle_new_affiliate()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.affiliates (user_id, affiliate_code, commission_rate)
  VALUES (NEW.id, public.generate_affiliate_code(), 40.00);
  RETURN NEW;
END;
$$;