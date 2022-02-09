import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button';
import { ModalHandles } from './types';

const Modal: React.FC<ModalHandles> = ({
  show = false,
  name,
  footer = false,
}) => (
  <div className={`modal-box ${show ? 'is-show' : ''}`}>
    <div className="modal-wrapper">
      <div className="header">
        <h2 className="text-h3 font-bold">{name}</h2>
        <CloseIcon
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
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

export default Modal;
