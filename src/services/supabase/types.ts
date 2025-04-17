import { User } from '@/lib/auth/types';

export type Database = {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: User;
        Update: User;
        Relationships: [];
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
