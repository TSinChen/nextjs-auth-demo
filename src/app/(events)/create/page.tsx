import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createEvent } from './actions';

export default async function CreateEventPage() {
  return (
    <form action={createEvent}>
      <Input name="title" />
      <Button type="submit">Create Event</Button>
    </form>
  );
}
