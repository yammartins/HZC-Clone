import { InputHTMLAttributes } from 'react';

export interface InputHandles extends InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  label?: string;
  way: string;
  textarea?: boolean;
  rows?: number;
}
