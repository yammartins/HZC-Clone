import { ReactComponent as IconShirts } from '../../assets/icons/accessibility.svg';
import { ReactComponent as IconHouse } from '../../assets/icons/house.svg';
import { ReactComponent as IconPin } from '../../assets/icons/pin.svg';
import { ReactComponent as IconUser } from '../../assets/icons/user.svg';
import { ReactComponent as IconVideo } from '../../assets/icons/videocam.svg';
import { ReactComponent as IconImage } from '../../assets/icons/wallpaper.svg';
import Logo from '../../assets/logo.svg';

const Menu: React.FC = () => (
  <aside className="aside">
    <div className="aside-logo">
      <img src={Logo} alt="" />
    </div>
    <div className="aside-menu">
      <div className="aside-menu-icons">
        <a href="#home">
          <IconHouse />
          Início
        </a>
      </div>
      <div className="aside-menu-icons">
        <a href="#video">
          <IconVideo />
          Vídeos
        </a>

      </div>
      <div className="aside-menu-icons">
        <a href="#trends">
          <IconPin />
          Picos
        </a>

      </div>
      <div className="aside-menu-icons">
        <a href="#members">
          <IconUser />
          Integrantes
        </a>

      </div>
      <div className="aside-menu-icons">
        <a href="#shirts">
          <IconShirts />
          Camisetas
        </a>

      </div>
      <div className="aside-menu-icons">
        <a href="#pictures">
          <IconImage />
          Pinturas
        </a>

      </div>

    </div>
  </aside>
);

export default Menu;
