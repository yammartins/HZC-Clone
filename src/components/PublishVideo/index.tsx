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
                <span>Nome do vídeo</span>
                <input type="text" className="xx" />
              </div>
              <input type="text" className="description" />
            </form>
            <div className="video-info">
              <div className="upload">
                <img src="" alt="" />
              </div>
              <div className="link">
                <span>Link do vídeo</span>
                <a href="https://h.zc/3342033">https://h.zc/3342033</a>
              </div>
              <div className="name">
                <span>Nome do vídeo</span>
                <small>hzc-gatin-g-morro.mp4</small>
              </div>
            </div>
          </div>
          <div className="miniature">
            <h6>Miniatura</h6>
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
          <span>
            <span />
          </span>
          33%
        </div>
        <Button icon="cloud" label="Publicar vídeo" />
      </div>
    </div>
  </div>
);

export default PublishVideo;
