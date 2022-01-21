import { MiniCardsHandles } from './types';

const MiniCards: React.FC<MiniCardsHandles> = ({
  id,
  image,
  title,
  author,

}) => (
  <div key={id} className="wraper">
    <div className="video-image pt-1">
      <img src={image} alt="imagem do vídeo" />
    </div>
    <div className="video-data">
      <h3 className="title">
        {title}
      </h3>
      <cite className="author">{author}</cite>
    </div>
  </div>
);

export default MiniCards;
