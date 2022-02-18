import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import { NotificationHandles } from './types';

const Notification: React.FC<NotificationHandles> = ({
  className,
  hasNotifications = false,
  menu = false,
  sectionName = false,
  ...rest
}) => (
  <div {...rest} className={`notification ${className || ''} ${menu && 'menu-notification'} ${sectionName && 'menu-section'}`}>
    <NotificationIcon />
    {hasNotifications && (<div className="notification-span" />)}
  </div>
);

export default Notification;
