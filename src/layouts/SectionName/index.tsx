import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';

import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import { SectionNameHandles } from './types';

const SectionName: React.FC<SectionNameHandles> = ({
  server,
  button,
  profile,
  name,
  hasNotifications = false,
}) => {
  const navigate = useNavigate();

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
              label="Criar um novo pico"
              onClick={button}
            />
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
          {hasNotifications === true && (<div className="w-2 h-2 absolute rounded-full flex-shrink bg-gr left-4 top-[1.4rem]" />)}
        </div>
      </div>
    </header>
  );
};

export default SectionName;
