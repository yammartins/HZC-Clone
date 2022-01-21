import Cards from '~/components/Cards';
import MainCards from '~/components/MainCards';
import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

import Video1 from '../../assets/album-1.png';
import Video2 from '../../assets/album-2.png';
import Video3 from '../../assets/album-3.png';
import Video4 from '../../assets/album-4.png';
import COF from '../../assets/banner.jpg';
import Cruyff from '../../assets/cruyff.jpeg';
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
              <MainCards id={1} image={Header1} author={Diomedes} name="Yam Prado Martins" title="HZC - Life is... / 2021" views={33} duration={52} way="#play" />
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
              <Cards id={1} image={Video1} author={Cruyff} name="Johann Cruyff" title="HZC - Tudo sem padrin" duration={42} />
              <Cards id={2} image={Video2} author={Diomedes} name="Diomedes" title="Ilíada - Segunda batalha" duration={48} />
              <Cards id={3} image={Video3} author={Samurai} name="Musashi" title="Livro - caminho dos cinco anéis" duration={55} />
              <Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
