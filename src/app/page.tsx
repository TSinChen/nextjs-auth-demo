import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createClient } from '@/services/supabase/server';
import { logout } from './actions';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <>
      {user.id}
      <form>
        <Button formAction={logout}>登出</Button>
      </form>
      <Button asChild>
        <Link href="/create">Go Create Event</Link>
      </Button>
    </>
  );
}
