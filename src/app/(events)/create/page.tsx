'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleError } from '@/lib/errors/helpers';
import { createEvent } from './actions';

export default function CreateEventPage() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    try {
      const { invite_code } = await createEvent(formData);
      if (invite_code) router.push(`/e/${invite_code}`);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <form action={handleSubmit}>
      <Input name="title" />
      <Button type="submit">Create Event</Button>
    </form>
  );
}
