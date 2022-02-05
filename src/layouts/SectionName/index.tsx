import { Link } from 'react-router-dom';

import Button from '~/components/Button';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import Picture from '../../assets/profile.jpeg';
import { SectionNameHandles } from './types';

const SectionName: React.FC<SectionNameHandles> = ({
  server,
  servername,
  button = false,
  profile,
  name,
  hasNotifications = false,
}) => (
  <header className="section-channel">
    <div className="channel-text">
      {server === true ? (<h2 className="font-bold font-sans text-h3 text-wt mr-auto">{servername}</h2>) : (
        <Link to="/picos">
          <span className="font-normal font-sans text-normal text-wt mr-auto gap-2 flex items-center">
            <LeftIcon />
            Retornar para a página anterior.
          </span>
        </Link>
      )}
    </div>

    {/* // Corrigir o padding em telas com e sem botão */}

    <div className="profile">
      {button === true && (
        <>
          <a className="link" href="algumacoisa">
            <Button icon="plus" size="md" appearance="outline" label="Criar um novo pico" />
          </a>
          <div className="h-8 w-[1px] bg-grey mx-8" />
        </>
      )}
      <div className="profile-data">
        <div className="picture">
          <img src={profile} alt="foto do usuário" />
        </div>
        <span className="font-sans text-normal font-normal text-grey">{name}</span>
        <div className="menu">
          <ArrowIcon />
        </div>
      </div>
      <div className="divider" />
      <div className="notification">
        <NotificationIcon />
        {hasNotifications === true && (<div className="w-2 h-2 absolute rounded-full flex-shrink bg-gr left-[1rem] top-[1.4rem]" />)}
      </div>
    </div>
  </header>
);

export default SectionName;
