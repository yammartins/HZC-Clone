import { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button';
import { ModalHandles } from './types';

const Modal: React.FC<ModalHandles> = ({
  name,
  footer = false,
  children,
}) => {
  const [modal, onModal] = useState(false);

  return (
    <div className={`modal-box ${modal ? 'is-show' : ''}`}>
      <div className="modal-wrapper">
        <div className="header">
          <h2 className="text-h3 font-bold">{name}</h2>
          <CloseIcon
            onClick={() => onModal(! true)}
            className="cursor-pointer"
          />
        </div>
        { children }
        {footer && (
          <div className="footer">
            <div className="progress-bar">
              <span className="w-[20rem] h-[0.25rem] bg-n80 rounded-[2rem] relative">
                <span className="bg-blma w-[33%] h-full absolute" />
              </span>
              <span className="text-leg text-wt">33%</span>
            </div>
            <Button icon="cloud" label="Publicar vídeo" className="!m-0" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
