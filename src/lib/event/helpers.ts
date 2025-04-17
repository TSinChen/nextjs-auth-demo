import ShortUniqueId from 'short-unique-id';
import { INVITE_CODE_LENGTH } from './constants';

export const generateInviteCode = () =>
  new ShortUniqueId().randomUUID(INVITE_CODE_LENGTH);
