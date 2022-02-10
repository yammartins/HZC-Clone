import { Dispatch, SetStateAction } from 'react';

export interface ModalHandles {
  name: string;
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  footer?: boolean;
  onClick?: () => void;
}
