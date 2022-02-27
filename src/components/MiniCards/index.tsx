import { MiniCardsHandles } from './types';

const MiniCards: React.FC<MiniCardsHandles> = ({
  id,
  image,
  title,
  author,

}) => (
  <div key={id} className="wraper">
    <img src={image} alt="imagem do vídeo" className="rounded-[0.25rem] w-8 h-8 object-cover mt-1" />
    <div className="data">
      <h3 className="title">
        {title}
      </h3>
      <cite className="author">{author}</cite>
    </div>
  </div>
);

export default MiniCards;
