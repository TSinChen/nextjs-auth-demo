'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/services/supabase/server';

export async function login() {
  const supabase = await createClient();

  const {
    data: { url },
  } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (url) redirect(url);
}
