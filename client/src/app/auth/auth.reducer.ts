import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  accessToken: string;
}

export const authReducer = createReducer(
  {
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlYW5qZXJtZXkiLCJpYXQiOjE2MDI3NjM4MDYsImV4cCI6MTYwMjc2NzQwNn0.VtAyC4rLmk5oG9-5iypk4_gtTXnnjZ4bmM2uSUEosXw',
  },
  on(login, (s, { accessToken }) => ({ accessToken })),
  on(logout, (s) => ({ accessToken: null }))
);
