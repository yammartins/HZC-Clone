import Button from '~/components/Button';
import Cards from '~/components/Cards';
import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

import Video1 from '../../assets/album-1.png';
import Video2 from '../../assets/album-2.png';
import Video3 from '../../assets/album-3.png';
import Video4 from '../../assets/album-4.png';
import COF from '../../assets/cof.jpeg';
import Cruyff from '../../assets/cruyff.jpeg';
import { ReactComponent as TimeIcon } from '../../assets/icons/time.svg';
import { ReactComponent as ViewsIcon } from '../../assets/icons/views.svg';
import Header1 from '../../assets/mainheader-1.svg';
import Olavo from '../../assets/olavo.jpeg';
import Diomedes from '../../assets/profile.jpeg';
import Right1 from '../../assets/right-1.png';
import Right2 from '../../assets/right-2.png';
import Right3 from '../../assets/right-3.png';
import Right4 from '../../assets/right-4.png';
import Right5 from '../../assets/right-5.png';
import Samurai from '../../assets/samurai.jpg';

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
                          <img src={Diomedes} alt="foto do autor" className="w-6 h-6 rounded-full flex-shrink" />
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
                  <div className="flex">
                    <a href="#watch">
                      <Button icon="play" label="Assistir agora" size="md" submit />
                    </a>
                  </div>
                </div>
              </div>
              <div className="most-recent">
                <div className="flex gap-4 justify-between">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeos recentes</h3>
                  <a href="#morevideos" className="font-sans text-leg text-blma">
                    Ver todos
                  </a>
                </div>
                <div className="most-recent-list">
                  {temporary.map(({
                    id, photo, title, author,
                  }) => (
                    <div key={id} className="wraper">
                      <div className="video-image pt-1">
                        <img src={photo} alt="imagem do vídeo" />
                      </div>
                      <div className="video-data">
                        <h3 className="title">
                          {title}
                        </h3>
                        <cite className="author">{author}</cite>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <h2 className="font-bold text-h3 text-wt">
              Vídeos mais vistos
            </h2>
            <div className="most-seen">
              <Cards id={1} image={Video1} author={Cruyff} name="Johann Cruyff" title="HZC - Tudo sem padrin" duration={`${42} minutos`} />
              <Cards id={2} image={Video2} author={Diomedes} name="Diomedes" title="Ilíada - Segunda batalha" duration={`${48} minutos`} />
              <Cards id={3} image={Video3} author={Samurai} name="Musashi" title="Livro - caminho dos cinco anéis" duration={`${55} minutos`} />
              <Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={`${21} minutos`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
