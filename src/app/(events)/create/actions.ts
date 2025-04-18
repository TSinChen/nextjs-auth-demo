'use server';

import { redirect } from 'next/navigation';
import { getUserQuery } from '@/lib/auth/queries';
import { getThrownError } from '@/lib/errors/helpers';
import { generateInviteCode } from '@/lib/events/helpers';
import {
  createEventInviteCodeQuery,
  createEventQuery,
} from '@/lib/events/queries';

export async function createEvent(formData: FormData) {
  try {
    const title = formData.get('title') as string;

    const user = await getUserQuery();
    if (!user) redirect('/');

    const event = await createEventQuery({ title, owner_id: user.id });

    const eventInviteCode = await createEventInviteCodeQuery({
      event_id: event.id,
      invite_code: generateInviteCode(),
    });

    return eventInviteCode;
  } catch (error) {
    throw getThrownError(error);
  }
}
