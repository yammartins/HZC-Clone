import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as PhotoIcon } from '../../assets/icons/photo.svg';
import Mini from '../../assets/mini-1.png';
import Minii from '../../assets/mini-2.png';
import Miniii from '../../assets/mini-3.png';
import Button from '../Button';

const PublishVideo: React.FC = () => (
  <div className="publish-box">
    <div className="publish-wrapper">
      <div className="video">
        <div className="header">
          <h2 className="text-h3 font-bold">Adicionar novo vídeo</h2>
          <CloseIcon
            onClick={() => {}}
            className="cursor-pointer"
          />
        </div>
        <p className="text-leg font-bold text-wt mt-[3.5rem] mb-4">Informações do vídeo</p>
        <div className="body">
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
      <div className="footer">
        <div className="progress-bar">
          <span className="w-[20rem] h-[0.25rem] bg-n80 rounded-[2rem] relative">
            <span className="bg-blma w-[33%] h-full absolute" />
          </span>
          <span className="text-leg text-wt">33%</span>
        </div>
        <Button icon="cloud" label="Publicar vídeo" className="!m-0" />
      </div>
    </div>
  </div>
);

export default PublishVideo;
