export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class SupabaseError extends AppError {
  constructor(message: string, code: string) {
    super(message, code);
    this.name = 'SupabaseError';
  }
}

export class AuthError extends AppError {
  constructor(message: string) {
    super(message, '401');
    this.name = 'AuthError';
  }
}
