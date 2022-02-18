import { HTMLAttributes } from 'react';

export interface NotificationHandles extends HTMLAttributes<HTMLDivElement> {
  hasNotifications?: boolean;
}
