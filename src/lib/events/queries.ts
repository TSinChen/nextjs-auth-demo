import {
  CreateEventInviteCodePayload,
  CreateEventPayload,
  Event,
  EventInviteCode,
} from '@/lib/events/types';
import { createClient } from '@/services/supabase/server';
import { SupabaseError } from '../errors/errors';

export const createEventQuery = async (
  payload: CreateEventPayload,
): Promise<Event> => {
  const supabase = await createClient();

  const { data: event, error } = await supabase
    .from('events')
    .insert(payload)
    .select()
    .single();

  if (error) throw new SupabaseError(error.message, error.code);

  return event;
};

export const createEventInviteCodeQuery = async (
  payload: CreateEventInviteCodePayload,
): Promise<EventInviteCode> => {
  const supabase = await createClient();

  const { data: eventInviteCode, error } = await supabase
    .from('event_invite_codes')
    .insert(payload)
    .select()
    .single();

  if (error) throw new SupabaseError(error.message, error.code);

  return eventInviteCode;
};

export const getEventInviteCodeQuery = async (
  inviteCode: EventInviteCode['invite_code'],
): Promise<EventInviteCode | null> => {
  const supabase = await createClient();

  const { data: eventInviteCodeData, error } = await supabase
    .from('event_invite_codes')
    .select()
    .eq('invite_code', inviteCode)
    .single();

  if (error) throw new SupabaseError(error.message, error.code);

  return eventInviteCodeData;
};

export const getEventQuery = async (
  eventId: Event['id'],
): Promise<Event | null> => {
  const supabase = await createClient();

  const { data: event } = await supabase
    .from('events')
    .select()
    .eq('id', eventId)
    .single();

  return event;
};

export const getEventByInviteCodeQuery = async (
  inviteCode: EventInviteCode['invite_code'],
): Promise<Event | null> => {
  const eventInviteCode = await getEventInviteCodeQuery(inviteCode);

  if (!eventInviteCode) return null;

  return await getEventQuery(eventInviteCode.event_id);
};
