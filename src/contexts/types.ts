import { FormEvent } from 'react';

export type AuthUserHandles = (
  e: FormEvent<HTMLFormElement>,
  identifier: string,
  password: string,
) => Promise<void>;

export interface UserHandles {
  name: string,
  email: string,
}

export interface AuthHandles {
  user: UserHandles | null,
  auth: AuthUserHandles,
}
