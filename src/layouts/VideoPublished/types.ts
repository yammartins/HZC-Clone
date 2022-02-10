import { Dispatch, SetStateAction } from 'react';

export interface VideoPublishedHandles {
  show: boolean;
  onShow: Dispatch<SetStateAction<boolean>>;
  video: string;
}
