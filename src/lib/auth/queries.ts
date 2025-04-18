import { createClient } from '@/services/supabase/server';
import { AuthError } from '../errors/errors';

export const getUserQuery = async () => {
  const supabase = await createClient();

  const {
    data: { user: authUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) throw new AuthError(authError.message);
  if (!authUser) return null;

  const { data: dbUser, error: dbError } = await supabase
    .from('users')
    .select()
    .eq('id', authUser.id)
    .single();

  if (dbError) throw new AuthError(dbError.message);

  return dbUser;
};
