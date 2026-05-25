import { api } from '../config';
import type { AuthCredentials, AuthResponse } from '../protocols';

async function signIn(credentials: AuthCredentials): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/users/sign-in', credentials);
  return data;
}

export const authService = {
  signIn,
};
