import React from 'react';

import { ReactComponent as DolarIcon } from '../../assets/icons/dolar.svg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewIcon } from '../../assets/icons/views.svg';
import { CardsHandles } from './types';

const Cards: React.FC<CardsHandles> = ({
  id,
  image,
  author,
  name,
  title,
  duration,
  type,
  price,
  view,
}) => (
  <div key={id} className={`box-${type}`}>
    <div className="box-banner h-40 w-auto">
      <img src={image} alt="imagem do vídeo" className="rounded-t-2xl h-full w-full" />
    </div>
    <div className={`box-${type}-description`}>
      <div className="author">
        <cite className="font-normal text-leg text-grey">{name}</cite>
        <div className="author-profile">
          <img src={author} alt="foto do autor" className="h-12 w-12 rounded-full object-cover" />
        </div>
      </div>
      <h2 className="text-h4 font-bold text-wt truncate hover:text-clip">{title}</h2>
      <span className="flex items-center gap-2 text-grey font-sans font-normal text-leg mt-6">
        {type === 'video' ? (<TimeIcon />) : (<DolarIcon />)}
        {type === 'video' ? (`${duration} minutos`) : (`${price}`)}
        {type === 'post' && (<ViewIcon />)}
        {type === 'post' && (`${view} visualizações`)}
      </span>
    </div>
  </div>
);

export default Cards;
