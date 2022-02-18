import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import { NotificationHandles } from './types';

const Notification: React.FC<NotificationHandles> = ({
  className,
  hasNotifications,
  ...rest
}) => (
  <div {...rest} className={`notification ${className || ''}`}>
    <NotificationIcon />
    {hasNotifications && (<div className="notification-span" />)}
  </div>
);

export default Notification;
