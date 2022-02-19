import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Notification from '~/components/Notification';
import { useAuth } from '~/contexts';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/closed.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/datauser.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { ReactComponent as PriceIcon } from '../../assets/icons/price.svg';
import Vasnetsov from '../../assets/vasnetsov.jpeg';
import { SectionNameHandles } from './types';

const SectionName: React.FC<SectionNameHandles> = ({
  server,
  button,
  profile,
  buttonname,
}) => {
  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const [open, onOpen] = useState(false);

  const menu = () => {
    onOpen(! open);
  };

  return (
    <header className={`section-channel ${button ? 'py-5' : ''}`}>
      <div className="channel-text">
        {server
          ? (<h2 className="channel-text-title">{server}</h2>)
          : (
            <span
              className="font-normal font-sans text-normal text-wt mr-auto gap-2 flex items-center cursor-pointer"
              onClick={() => navigate(-1)}
              role="presentation"
            >
              <LeftIcon />
              Retornar para a página anterior.
            </span>
          )}
      </div>

      <div className="profile">
        {button && (
          <>
            <Button
              icon="plus"
              size="md"
              appearance="outline"
              label={buttonname}
              onClick={button}
              className="button-section"
            />
            <div className="button-divider" />
          </>
        )}
        <div className="profile-data">
          <div className="picture">
            <img src={profile} alt="foto do usuário" />
          </div>
          <span className="profile-data-name">{user?.username}</span>
          <div className="menu">
            <ArrowIcon
              onClick={menu}
              className={`pointer ${! open ? 'is-closed' : 'open'}`}
            />
            <div className={`user-profile ${open ? 'is-open' : ''}`}>
              <div className="menu-header">
                <span className="flex gap-2 text-wt text-leg p-3">
                  <img src={Vasnetsov} alt="foto do usuário" className="rounded-full w-7 h-7 flex-shrink" />
                  {user?.email}
                </span>
                <CloseIcon
                  onClick={menu}
                  className="pointer"
                />
              </div>
              <Link to="/" className="link">
                <UserIcon />
                Ver perfil
              </Link>
              <Link to="/" className="link">
                <EditIcon />
                Editar dados
              </Link>
              <Link to="/" className="link">
                <PriceIcon />
                Tornar-se premium
              </Link>
              <div className="w-[95%] h-[2px] bg-grey my-2 self-center" />
              <div
                role="presentation"
                onClick={logout}
                className="logout"
              >
                <LogoutIcon />
                Desconectar-se
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <Notification hasNotifications sectionName />
      </div>
    </header>
  );
};

export default SectionName;
