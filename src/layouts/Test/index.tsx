import React from 'react';

import Foto from '../../assets/villalobos.jpeg';
import SectionName from '../SectionName';

const Test: React.FC = () => (
  <SectionName server="Teste" profile={Foto} hasNotifications />
);

export default Test;
