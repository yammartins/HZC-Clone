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
} from './types';

export const AuthContext = createContext({} as AuthHandles);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);

  const fetch = (data?: AuthFetchHandles) => {
    if (! data) {
      // Recuperar dados da storage.

      return;
    }

    onUser(data.user);

    cookie.set('@hzc-token', data.jwt);

    sessionStorage.setItem('@hzc-user', JSON.stringify(data.user));
  };

  const auth: AuthUserHandles = useCallback(async (form, onError) => {
    await api.post('/auth/local', form)
      .then(({ data }) => fetch(data))
      .catch(({ response }) => onError(response.data.error.message));

    setTimeout(() => onError(null), 3000);
  }, []);

  const value = useMemo(() => ({
    user,
    auth,
  }), [user, auth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
