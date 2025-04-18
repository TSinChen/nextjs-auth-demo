import { AppError } from './errors';

export const DEFAULT_ERROR = new AppError(
  'An unexpected error occurred. Please try again later.',
  '500',
);
