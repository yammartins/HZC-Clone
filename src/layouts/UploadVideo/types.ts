import { Dispatch, SetStateAction } from 'react';

export interface UploadVideoHandles {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  onPublish: Dispatch<SetStateAction<boolean>>;
}
