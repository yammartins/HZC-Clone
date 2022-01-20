import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/notifications.svg';
import Picture from '../../assets/zaap.jpeg';

const SectionName: React.FC = () => (
  <div className="section-channel">
    <h2 className="font-bold font-sans text-h3 text-wt">Início</h2>
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
  </div>
);

export default SectionName;
