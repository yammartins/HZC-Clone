import React from 'react';

import { ReactComponent as DolarIcon } from '../../assets/icons/dolar.svg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewIcon } from '../../assets/icons/views.svg';
import UserPhoto from '../UserPhoto';
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
  views,
}) => (
  <div key={id} className={`box-${type}`}>
    <div className="box-banner h-40 w-[16rem]">
      <img src={image} alt="imagem do vídeo" className="rounded-t-2xl h-full w-full object-cover self-center" />
    </div>
    <div className={`box-${type}-description`}>
      <div className="author">
        <cite className="font-normal text-leg text-grey">{name}</cite>
        <div className="author-profile">
          <UserPhoto card userimage={author} />
        </div>
      </div>
      <h2 className="text-h4 font-bold text-wt w-[12.625rem] truncate">{title}</h2>
      <span className="flex items-center gap-2 text-grey font-sans font-normal text-leg mt-6">
        {duration && (<TimeIcon />)}
        {duration && (`${duration} min`)}
        {price && (<DolarIcon />)}
        {price && (`${price}`)}
        {views as number >= 1 && (<ViewIcon />)}
        {views as number >= 1 && (`${views} visualizações`)}
        {views === 0 && (<ViewIcon />)}
        {views === 0 && ('0 visualizações')}
      </span>
    </div>
  </div>
);

export default Cards;
