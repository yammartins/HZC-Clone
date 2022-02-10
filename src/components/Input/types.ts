import { InputHTMLAttributes } from 'react';

export interface InputHandles extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  way: string;
  input: string;
}
