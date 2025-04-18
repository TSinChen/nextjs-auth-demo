import { toast } from 'sonner';
import { DEFAULT_ERROR } from './constants';
import { AppError } from './errors';

export const isAppError = (error: unknown): error is AppError => {
  if (!(error instanceof Error)) return false;
  return (
    error instanceof AppError ||
    error.name === 'AppError' ||
    error.name === 'SupabaseError'
  );
};

export const getThrownError = (error: unknown) =>
  isAppError(error) ? error : DEFAULT_ERROR;

export const handleError = (error: unknown) => {
  toast(getThrownError(error).code);
};
