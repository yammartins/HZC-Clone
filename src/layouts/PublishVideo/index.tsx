import Modal from '~/components/Modal';

import { ReactComponent as PhotoIcon } from '../../assets/icons/photo.svg';
import Mini from '../../assets/mini-1.png';
import Minii from '../../assets/mini-2.png';
import Miniii from '../../assets/mini-3.png';
import { PublishVideoHandles } from './types';

const PublishVideo: React.FC<PublishVideoHandles> = ({
  onConfirm,
  ...prev
}) => {
  const toogle = () => {
    onConfirm(true);
    prev.onShow(false);
  };

  return (
    <Modal
      name="hzc-gatin-g-gorro.mp4"
      {...prev}
      footer
      onClick={toogle}
    >
      <div className="video">
        <p className="text-leg font-bold text-wt mt-[3.5rem] mb-4">Informações do vídeo</p>
        <div className="video-body">
          <div className="video-register">
            <form action="">
              <div className="name">
                <span className="text-sm text-blma">Nome do vídeo</span>
                <input type="text" className="bg-n80 outline-0 text-wt" />
              </div>
              <input type="text" className="bg-n80 rounded-t-lg w-[34rem] h-[7.5rem] outline-0 placeholder:text-grey px-4 py-2 text-inherit text-grey align-top relative pb-20" placeholder="Descrição" />
            </form>
            <div className="video-info">
              <img src={Minii} alt="" />
              <div className="link">
                <span className="text-grey text-sm">Link do vídeo</span>
                <a
                  href="https://h.zc/3342033"
                  className="underline text-blma text-leg"
                >
                  https://h.zc/3342033

                </a>
              </div>
              <div className="title">
                <span className="text-grey text-sm">Nome do vídeo</span>
                <small className="text-wt text-leg">hzc-gatin-g-morro.mp4</small>
              </div>
            </div>
          </div>
          <div className="miniature">
            <h6 className="text-leg text-wt">Miniatura</h6>
            <div className="wrapper">
              <div className="add-more">
                <PhotoIcon />
                Inserir imagem
              </div>
              <img src={Mini} alt="Imagem em miniatura" />
              <img src={Minii} alt="Imagem em miniatura" />
              <img src={Miniii} alt="Imagem em miniatura" />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PublishVideo;
