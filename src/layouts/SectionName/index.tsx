import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import { useAuth } from '~/contexts';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as DolarIcon } from '../../assets/icons/dolar.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';
import Vasnetsov from '../../assets/vasnetsov.jpeg';
import { SectionNameHandles } from './types';

const SectionName: React.FC<SectionNameHandles> = ({
  server,
  button,
  profile,
  hasNotifications = false,
  buttonname,
}) => {
  const {
    user,
  } = useAuth();

  const navigate = useNavigate();

  const [open, onOpen] = useState(false);

  const menu = () => {
    onOpen(! open);
  };

  return (
    <header className="section-channel">
      <div className="channel-text">
        {server
          ? (<h2 className="font-bold font-sans text-h3 text-wt mr-auto">{server}</h2>)
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

      {/* // Corrigir o padding em telas com e sem botão */}

      <div className="profile">
        {button && (
          <>
            <Button
              icon="plus"
              size="md"
              appearance="outline"
              label={buttonname}
              onClick={button}
            />
            <div className="h-8 w-[1px] bg-grey mx-8" />
          </>
        )}
        <div className="profile-data">
          <div className="picture">
            <img src={profile} alt="foto do usuário" />
          </div>
          <span className="font-sans text-normal font-normal text-grey">{user?.username}</span>
          <div className="menu">
            <ArrowIcon
              onClick={menu}
              className="cursor-pointer "
            />
            <div className={`user-profile ${open ? 'is-open' : ''}`}>
              <span>
                <img src={Vasnetsov} alt="foto do usuário" className="rounded-full w-8 h-8" />
                {user?.email}
              </span>
              <Link to="/">
                <UserIcon />
                Ver perfil
              </Link>
              <Link to="/">
                <ProfileIcon />
                Editar dados
              </Link>
              <Link to="/">
                <DolarIcon />
                Tornar-se premium
              </Link>
              <Link to="/">
                <LogoutIcon />
                Desconectar-se
              </Link>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="notification">
          <NotificationIcon />
          {hasNotifications === true && (<div className="w-2 h-2 absolute rounded-full flex-shrink bg-gr left-4 top-[1.4rem]" />)}
        </div>
      </div>
    </header>
  );
};

export default SectionName;
