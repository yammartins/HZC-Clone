import { Dispatch, SetStateAction } from 'react';

export interface PublishVideoHandles {

  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  onConfirm?: Dispatch<SetStateAction<boolean>>;
}
