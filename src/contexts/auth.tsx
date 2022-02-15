import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';

import cookie from 'js-cookie';

import api from '~/services';

import {
  UserHandles,
  AuthHandles,
  AuthUserHandles,
  AuthFetchHandles,
  CreateUserHandles,
} from './types';

export const AuthContext = createContext({} as AuthHandles);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);

  const fetch = useCallback((data?: AuthFetchHandles) => {
    // Set user data.
    if (data) {
      onUser(data.user);

      cookie.set('@hzc-token', data.jwt);

      sessionStorage.setItem('@hzc-user', JSON.stringify(data.user));

      return;
    }

    // Retrive user data from storage.
    const cookies = cookie.get('@hzc-token');
    const storage = sessionStorage.getItem('@hzc-user');

    if (cookies && storage) {
      const parse = JSON.parse(storage);

      onUser(parse);
    }
  }, []);

  const auth: AuthUserHandles = useCallback(async (form, onError) => {
    await api.post('/auth/local', form)
      .then(({ data }) => fetch(data))
      .catch(({ response }) => {
        if (onError) onError(response.data.error.message);
      });

    if (onError) setTimeout(() => onError(null), 3000);
  }, [fetch]);

  const create: CreateUserHandles = useCallback(async (data, onError) => {
    const {
      email,
      password,
    } = data;

    await api.post('/auth/local/register', data)
      .then(async () => {
        await auth({ password, identifier: email });
      })
      .catch(({ response }) => onError(response.data.error.message));

    setTimeout(() => onError(null), 3000);
  }, [auth]);

  const logout = useCallback(() => {
    onUser(null);

    cookie.remove('@hzc-token');

    sessionStorage.removeItem('@hzc-user');
  }, []);

  const value = useMemo(() => ({
    user,
    auth,
    fetch,
    logout,
    create,
    authenticated: !! user,
  }), [user, auth, fetch, logout, create]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
