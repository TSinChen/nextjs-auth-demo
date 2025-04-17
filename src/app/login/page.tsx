import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createClient } from '@/services/supabase/server';
import { login } from './actions';

export default async function LoginPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect('/');

  return (
    <form className="flex gap-2">
      <Button formAction={login} variant="outline">
        Google 登入
      </Button>
    </form>
  );
}
