import {
  useMemo,
  useState,
  useContext,
  createContext,
} from 'react';

import api from '~/services';

import { UserHandles, AuthHandles, AuthUserHandles } from './types';

export const AuthContext = createContext({} as AuthHandles);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);

  const auth: AuthUserHandles = async (e, identifier, password) => {
    e.preventDefault();

    await api.post('/auth/local', {
      identifier,
      password,
    })
      .then(({ data }) => console.log(data))
      .catch(({ message }) => console.log(message));

    // setTimeout(() => onError(false), 3000);
  };

  const value = useMemo(() => ({
    user,
    auth,
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
