// auth.js
import { supabase } from './supabaseClient';

export const signUp = async (email, password, username) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Error signing up:', error.message);
    return { error };
  }

  // Insert user profile into profiles table
  const { data, error: profileError } = await supabase
    .from('profiles')
    .insert([{ user_id: user.id, username }]);

  if (profileError) {
    console.error('Error creating profile:', profileError.message);
    return { error: profileError };
  }

  return { user, profile: data };
};