import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { setAuthToken } from '../config/api';
import type { AuthCredentials, StoredAuth } from '../protocols';
import { authService } from '../services';

const STORAGE_KEY = 'pex_auth';

type AuthContextValue = {
  auth: StoredAuth | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredAuth(): StoredAuth | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as StoredAuth;
    if (!parsed.token || !parsed.user) return null;
    return parsed;
  } catch {
    return null;
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<StoredAuth | null>(() => readStoredAuth());

  useEffect(() => {
    setAuthToken(auth?.token ?? null);
  }, [auth]);

  const login = useCallback(async (credentials: AuthCredentials) => {
    const response = await authService.signIn(credentials);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(response));
    setAuth(response);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAuth(null);
  }, []);

  const value = useMemo(
    () => ({
      auth,
      isAuthenticated: Boolean(auth?.token),
      isAdmin: auth?.role === 'admin',
      login,
      logout,
    }),
    [auth, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
