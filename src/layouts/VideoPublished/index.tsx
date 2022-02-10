import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Modal from '~/components/Modal';

import { ReactComponent as SucessIcon } from '../../assets/icons/sucessful.svg';
import { VideoPublishedHandles } from './types';

const VideoPublished: React.FC<VideoPublishedHandles> = ({
  video,
  ...prev
}) => (
  <Modal name="Vídeo enviado" {...prev}>
    <div className="body">
      <div className="icon">
        <SucessIcon className="text-wt self-center m-auto w-10 h-10" />
      </div>
      <h4 className="text-h4 text-wt font-bold">Parabéns! Seu vídeo foi publicado</h4>
      <span className="text-menu text-wt/80 mb-2">
        Seu vídeo
        {' '}
        {video}
        {' '}
        foi publicado com sucesso!
      </span>
      <Link to="/">
        <Button icon="house" label="Voltar para o início" submit size="hg" />
      </Link>
    </div>
    <small className="text-leg text-wt/90 mx-auto">Obrigado pela sua contribuição!</small>
  </Modal>
);

export default VideoPublished;
