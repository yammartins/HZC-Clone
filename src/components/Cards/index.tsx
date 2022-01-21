import React from 'react';

import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { CardsHandles } from './types';

const Cards: React.FC<CardsHandles> = ({
  id,
  image,
  author,
  name,
  title,
  duration,
}) => (
  <div key={id} className="box">
    <div className="box-banner">
      <img src={image} alt="imagem do vídeo" />
    </div>
    <div className="box-description">
      <div className="author">
        <cite className="font-normal text-leg text-grey">{name}</cite>
        <div className="author-profile">
          <img src={author} alt="foto do autor" className="h-12 w-12 rounded-full flex-shrink" />
        </div>
      </div>
      <h2 className="text-h4 font-bold text-wt">{title}</h2>
      <span className="flex items-center gap-2 text-grey font-sans font-normal text-leg mt-6">
        <TimeIcon />
        {duration}
      </span>
    </div>
  </div>
);

export default Cards;
