import { Dispatch, SetStateAction } from 'react';

export interface UploadVideoHandles {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  onUpload: Dispatch<SetStateAction<boolean>>;
}
