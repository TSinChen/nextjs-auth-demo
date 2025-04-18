import { User } from '@/lib/auth/types';
import {
  CreateEventInviteCodePayload,
  CreateEventPayload,
  Event,
  EventInviteCode,
  UpdateEventPayload,
} from '@/lib/events/types';

export type Database = {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: User;
        Update: User;
        Relationships: [];
      };
      events: {
        Row: Event;
        Insert: CreateEventPayload;
        Update: UpdateEventPayload;
        Relationships: [
          {
            foreignKeyName: 'events_owner_id_fkey';
            columns: ['owner_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      event_invite_codes: {
        Row: EventInviteCode;
        Insert: CreateEventInviteCodePayload;
        Update: never;
        Relationships: [
          {
            foreignKeyName: 'event_invite_codes_event_id_fkey';
            columns: ['event_id'];
            isOneToOne: false;
            referencedRelation: 'events';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
