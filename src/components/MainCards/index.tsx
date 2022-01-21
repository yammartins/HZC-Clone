import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewsIcon } from '../../assets/icons/views.svg';
import Button from '../Button';
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
}) => (
  <div className="featured-video">
    <div key={id} className="banner h-full">
      <img src={image} alt="imagem do vídeo" className="h-full" />
    </div>
    <div className="footer h-full">
      <div className="description">
        <h3 className="font-sans font-bold text-h4">Vídeo em destaque</h3>

        <h1 className="font-sans font-bold text-h3">{title}</h1>

        <div className="about-and-info">
          <div className="author-name">
            <div className="author-image w-6 h-6">
              <img src={author} alt="foto do autor" className="w-6 h-6 rounded-full flex-shrink" />
            </div>
            <cite className="font-sans text-normal font-normal text-grey">{name}</cite>
          </div>
          <div className="data">
            <div className="published">
              <span className="flex items-center gap-2">
                <TimeIcon />
                {duration}
                {' '}
                minutos
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
      <div className="flex">
        <a href={way}>
          <Button icon="play" label="Assistir agora" size="md" submit />
        </a>
      </div>
    </div>
  </div>
);

export default MainCards;
