import { createClient } from '@/services/supabase/server';

export const getUserQuery = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: userData } = await supabase
    .from('users')
    .select()
    .eq('id', user.id)
    .single();

  return userData;
};
