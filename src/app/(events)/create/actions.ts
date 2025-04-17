'use server';

import { redirect } from 'next/navigation';
import { getUserQuery } from '@/lib/auth/queries';
import { generateInviteCode } from '@/lib/event/helpers';
import { createEventInviteCode, createEventQuery } from '@/lib/event/queries';

export async function createEvent(formData: FormData) {
  const title = formData.get('title') as string;

  const user = await getUserQuery();
  if (!user) return;

  const event = await createEventQuery({ title, owner_id: user.id });
  if (!event) return;

  const eventInviteCode = await createEventInviteCode({
    event_id: event.id,
    invite_code: generateInviteCode(),
  });

  if (eventInviteCode) redirect(`/e/${eventInviteCode.invite_code}`);
}
