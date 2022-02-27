import React from 'react';

import classNames from 'classnames';

import { ProfileHandles } from './types';

const UserPhoto: React.FC<ProfileHandles> = ({
  section,
  card,
  maincard,
  userimage,
}) => {
  const styled = classNames(
    'userphotos',
    section && 'section',
    card && 'card',
    maincard && 'maincard',
  );

  return (
    <div className={styled}>
      <img src={userimage} alt="Imagem do autor" />
    </div>
  );
};

export default UserPhoto;
