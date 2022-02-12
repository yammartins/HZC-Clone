import { Dispatch, SetStateAction } from 'react';

type FormUserHandles = {
  password: string,
  identifier: string,
};

export interface UserHandles {
  blocked: boolean,
  confirmed: boolean,
  createdAt: string,
  email: string,
  id: number,
  provider: string,
  updatedAt: string,
  username: string,
}

export type AuthFetchHandles = {
  jwt: string,
  user: UserHandles,
};

export type AuthUserHandles = (
  data: FormUserHandles,
  onError: Dispatch<SetStateAction<string | null>>
) => Promise<void>;

export interface AuthHandles {
  user: UserHandles | null,
  auth: AuthUserHandles,
}
