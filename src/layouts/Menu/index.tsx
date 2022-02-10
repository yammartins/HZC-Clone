import { Link } from 'react-router-dom';

import { ReactComponent as IconShirts } from '../../assets/icons/accessibility.svg';
import { ReactComponent as IconHouse } from '../../assets/icons/house.svg';
import { ReactComponent as IconPin } from '../../assets/icons/pin.svg';
import { ReactComponent as IconUser } from '../../assets/icons/user.svg';
import { ReactComponent as IconVideo } from '../../assets/icons/videocam.svg';
import { ReactComponent as IconImage } from '../../assets/icons/wallpaper.svg';
import Logo from '../../assets/logo.svg';

const Menu: React.FC = () => (
  <aside className="aside">
    <Link to="/">
      <div className="aside-logo">
        <img src={Logo} alt="" />
      </div>
    </Link>
    <div className="aside-menu">
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
  </aside>
);

export default Menu;
