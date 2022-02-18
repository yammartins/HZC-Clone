import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '~/contexts';

import { ReactComponent as IconShirts } from '../../assets/icons/accessibility.svg';
import { ReactComponent as IconCloseHamb } from '../../assets/icons/hamb-closed.svg';
import { ReactComponent as IconHamb } from '../../assets/icons/hamb.svg';
import { ReactComponent as IconHouse } from '../../assets/icons/house.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import { ReactComponent as IconPin } from '../../assets/icons/pin.svg';
import { ReactComponent as IconUser } from '../../assets/icons/user.svg';
import { ReactComponent as IconVideo } from '../../assets/icons/videocam.svg';
import { ReactComponent as IconImage } from '../../assets/icons/wallpaper.svg';
import Logo from '../../assets/logo.svg';
import { MenuHandles } from './types';

const Menu: React.FC<MenuHandles> = ({
  hasNotifications = false,
}) => {
  const [hamb, onHamb] = useState(false);

  const menu = () => {
    onHamb(! hamb);
  };

  const {
    logout,
  } = useAuth();

  return (
    <aside className="aside">
      <IconHamb
        className={`menu-pointer-opened ${! hamb ? '' : 'close'}`}
        onClick={menu}
      />
      <Link to="/">
        <div className="aside-logo">
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className={`aside-menu ${hamb ? 'is-show' : ''}`}>
        <div className="">
          <IconCloseHamb
            className={`menu-pointer-closed ${! hamb ? '' : 'open'}`}
            onClick={menu}
          />
          <div className="aside-menu-icons">
            <Link to="/" className="link">
              <IconHouse />
              Início
            </Link>
          </div>
          <div className="aside-menu-icons">
            <Link to="/videos" className="link">
              <IconVideo />
              Vídeos
            </Link>

          </div>
          <div className="aside-menu-icons">
            <Link to="/picos" className="link">
              <IconPin />
              Picos
            </Link>

          </div>
          <div className="aside-menu-icons">
            <Link to="/" className="link">
              <IconUser />
              Integrantes
            </Link>

          </div>
          <div className="aside-menu-icons">
            <Link to="/" className="link">
              <IconShirts />
              Camisetas
            </Link>

          </div>
          <div className="aside-menu-icons">
            <Link to="/" className="link">
              <IconImage />
              Pinturas
            </Link>

          </div>
        </div>
        <div
          role="presentation"
          onClick={logout}
          className="logout"
        >
          <LogoutIcon />
          Desconectar-se
        </div>
      </div>

      <div className="notification">
        <NotificationIcon />
        {hasNotifications === true && (<div className="notification-span" />)}
      </div>
    </aside>
  );
};

export default Menu;
