import { redirect } from 'next/navigation';
import { getEventByInviteCodeQuery } from '@/lib/event/queries';

export default async function EventPage({
  params,
}: {
  params: Promise<{
    eventInviteCode: string;
  }>;
}) {
  const { eventInviteCode } = await params;

  const event = await getEventByInviteCodeQuery(eventInviteCode);

  if (!event) redirect('/');

  return <div>{event.title}</div>;
}
