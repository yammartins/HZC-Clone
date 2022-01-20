import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import Picture from '../../assets/profile.jpeg';

const SectionName: React.FC = () => (
  <header className="section-channel">
    <div className="channel-text">
      <h2 className="font-bold font-sans text-h3 text-wt mr-auto">Início</h2>
    </div>
    <div className="profile">
      <div className="profile-data">
        <div className="picture">
          <img src={Picture} alt="foto do usuário" />
        </div>
        <span className="font-sans text-normal font-normal text-grey">Yampmar</span>
        <div className="menu">
          <ArrowIcon />
        </div>
      </div>
      <div className="divider" />
      <div className="notification">
        <NotificationIcon />
      </div>
    </div>
  </header>
);

export default SectionName;
