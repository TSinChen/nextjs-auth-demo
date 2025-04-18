export type Event = {
  id: string;
  title: string;
  description: string | null;
  owner_id: string;
  created_at: string;
};

export type CreateEventPayload = {
  title: string;
  description?: string;
  owner_id: string;
};

export type UpdateEventPayload = Partial<Pick<Event, 'title' | 'description'>>;

export type EventInviteCode = {
  id: string;
  created_at: string;
  invite_code: string;
  event_id: Event['id'];
};

export type CreateEventInviteCodePayload = {
  event_id: Event['id'];
  invite_code: string;
};
