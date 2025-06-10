
import { supabase } from '@/integrations/supabase/client';

export const signUp = async (email: string, password: string, username?: string) => {
  const { data: { user }, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: username || email,
      }
    }
  });

  if (error) {
    console.error('Error signing up:', error.message);
    return { error };
  }

  return { user };
};

export const signIn = async (email: string, password: string) => {
  const { data: { user }, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Error signing in:', error.message);
    return { error };
  }

  return { user };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.error('Error signing out:', error.message);
    return { error };
  }

  return { error: null };
};
