import {
  CreateEventInviteCodePayload,
  CreateEventPayload,
  Event,
  EventInviteCode,
} from '@/lib/event/types';
import { createClient } from '@/services/supabase/server';

export const createEventQuery = async (
  payload: CreateEventPayload,
): Promise<Event | null> => {
  const supabase = await createClient();

  const { data: event } = await supabase
    .from('events')
    .insert(payload)
    .select()
    .single();

  return event;
};

export const createEventInviteCode = async (
  payload: CreateEventInviteCodePayload,
): Promise<EventInviteCode | null> => {
  const supabase = await createClient();

  const { data: eventInviteCode } = await supabase
    .from('event_invite_codes')
    .insert(payload)
    .select()
    .single();

  return eventInviteCode;
};

export const getEventByInviteCodeQuery = async (
  inviteCode: EventInviteCode['invite_code'],
): Promise<Event | null> => {
  const supabase = await createClient();

  const { data: eventInviteCodeData } = await supabase
    .from('event_invite_codes')
    .select('event_id')
    .eq('invite_code', inviteCode)
    .single();

  if (!eventInviteCodeData) return null;

  const { data: event } = await supabase
    .from('events')
    .select()
    .eq('id', eventInviteCodeData.event_id)
    .single();

  return event;
};
