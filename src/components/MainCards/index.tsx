import { ReactComponent as DolarIcon } from '../../assets/icons/dolar.svg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewsIcon } from '../../assets/icons/views.svg';
import Button from '../Button';
import UserPhoto from '../UserPhoto';
import { MainCardsHandles } from './types';

const MainCards: React.FC<MainCardsHandles> = ({
  id,
  image,
  author,
  name,
  title,
  views,
  duration,
  way,
  icon,
  button,
  type,
  info,
  price,
}) => (
  <div className={`featured-${type}`}>
    <div key={id} className={`featured-${type}-banner`}>
      <img src={image} alt="imagem do vídeo" className="main-image" />
    </div>
    <div className="footer">
      <div className="description">
        <h3 className="font-sans font-bold text-h4">{info}</h3>

        <h1 className="font-sans font-bold text-h3 truncate">{title}</h1>

        <div className="about-and-info">
          <div className="author-name">
            <UserPhoto maincard userimage={author} />
            <cite className="font-sans text-normal font-normal text-grey">{name}</cite>
          </div>
          <div className="data">
            <div className="published">
              <span className="flex items-center gap-2">
                {type === 'video' ? (<TimeIcon />) : (<DolarIcon />)}
                {type === 'video' ? (`${duration} minutos`) : (`${price}`)}
              </span>
            </div>
            <div className="views">
              <span className="flex items-center gap-2">
                <ViewsIcon />
                {views}
                {' '}
                visualizações
              </span>
            </div>
          </div>

        </div>
      </div>
      <div className="buttom-card">
        <a href={way}>
          <Button icon={icon} label={button} size="md" submit />
        </a>
      </div>
    </div>
  </div>
);

export default MainCards;
