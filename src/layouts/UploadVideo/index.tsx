import Modal from '~/components/Modal';

import { ReactComponent as CloudIcon } from '../../assets/icons/cloud.svg';
import Button from '../../components/Button';
import { UploadVideoHandles } from './types';

const UploadVideo: React.FC<UploadVideoHandles> = ({
  onPublish,
  ...rest
}) => {
  const toogle = () => {
    onPublish(true);
    rest.onShow(false);
  };

  return (
    <Modal
      {...rest}
      name="Adicionar novo vídeo"
    >
      <div className="body">
        <div className="icon">
          <CloudIcon className="text-wt self-center m-auto w-10 h-10" />
        </div>
        <h4 className="text-h4 text-wt font-bold">Arraste e solte o vídeo para iniciar o upload</h4>
        <span className="text-menu text-wt/80 mb-2">Seu vídeo será publicado na plataforma</span>
        <Button icon="plus" label="Selecionar arquivos" submit size="hg" onClick={toogle} />
      </div>
      <small className="text-leg text-wt/90 mx-auto">Cuidado! Alguns formatos de vídeo podem não funcionar.</small>
    </Modal>
  );
};

export default UploadVideo;
