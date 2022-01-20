import Button from '~/components/Button';
import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewsIcon } from '../../assets/icons/views.svg';
import Header1 from '../../assets/mainheader-1.svg';
import Picture from '../../assets/profile.jpeg';
import Right1 from '../../assets/right-1.png';
import Right2 from '../../assets/right-2.png';
import Right3 from '../../assets/right-3.png';
import Right4 from '../../assets/right-4.png';
import Right5 from '../../assets/right-5.png';

const Homepage: React.FC = () => {
  const temporary = [
    {
      id: '1',
      photo: Right1,
      title: 'HZC - Love machine',
      author: 'Júlia Fonseca',
    },
    {
      id: '2',
      photo: Right2,
      title: 'HZC - Vol.3',
      author: 'Interpol',
    },
    {
      id: '3',
      photo: Right3,
      title: 'HZC - Pescaria na Urca',
      author: 'O Rappa',
    },
    {
      id: '4',
      photo: Right4,
      title: 'Vidalocagi - Guerreiros do Asfalto',
      author: 'O Imbecil',
    },
    {
      id: '5',
      photo: Right5,
      title: 'Vidalocagi - Não importa o nível',
      author: 'O Imbecil',
    },
    {
      id: '6',
      photo: Right1,
      title: 'HZC - Love machine',
      author: 'Júlia Fonseca',
    },
  ];

  return (
    <div className="flex w-full">
      <Menu />
      <main className="flex flex-col w-full">
        <SectionName />
        <div className="content">
          <div className="videos">
            <div className="wraper-featured">
              <div className="featured-video">
                <div className="banner h-full">
                  <img src={Header1} alt="imagem do vídeo" className="h-full" />
                </div>
                <div className="footer h-full">
                  <div className="description">
                    <h3 className="font-sans font-bold text-h4">Vídeo em destaque</h3>

                    <h1 className="font-sans font-bold text-h3">HZC - Life is... /2021</h1>

                    <div className="about-and-info">
                      <div className="author-name">
                        <div className="author-image w-6 h-6">
                          <img src={Picture} alt="foto do autor" className="w-6 h-6 rounded-full flex-shrink" />
                        </div>
                        <cite className="font-sans text-normal font-normal text-grey">Yam Prado Martins</cite>
                      </div>
                      <div className="data">
                        <div className="published">
                          <span className="flex items-center gap-2">
                            <TimeIcon />
                            33 minutos
                          </span>
                        </div>
                        <div className="views">
                          <span className="flex items-center gap-2">
                            <ViewsIcon />
                            56 visualizações
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="flex m-auto">
                    <a href="#watch">
                      <Button icon="play" label="Assistir agora" size="md" submit />
                    </a>
                  </div>
                </div>
              </div>
              <div className="most-recent">
                <div className="flex justify-between">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeo em destaque</h3>
                  <a href="#morevideos">
                    <span className="font-semibold text-leg text-blma">
                      Ver todos
                    </span>
                  </a>
                </div>
                <div className="most-recent-list">
                  {temporary.map(({
                    id, photo, title, author,
                  }) => (
                    <div key={id} className="wraper flex">
                      <div className="video-image">
                        <img src={photo} alt="imagem do vídeo" />
                      </div>
                      <div className="video-data">
                        <div className="title">
                          {title}
                        </div>
                        <div className="author">
                          <cite>{author}</cite>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
