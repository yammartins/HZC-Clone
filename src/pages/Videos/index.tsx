import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cards from '~/components/Cards';
import MainCards from '~/components/MainCards';
import MiniCards from '~/components/MiniCards';
import PublishVideo from '~/layouts/PublishVideo';
import SectionName from '~/layouts/SectionName';
import UploadVideo from '~/layouts/UploadVideo';
import VideoPublished from '~/layouts/VideoPublished';

import Video1 from '../../assets/album-1.png';
import Video2 from '../../assets/album-2.png';
import Video3 from '../../assets/album-3.png';
import COF from '../../assets/banner.jpg';
import Cruyff from '../../assets/cruyff.jpeg';
import Farney from '../../assets/farney.jpeg';
import Header1 from '../../assets/mainheader-1.svg';
import Olavo from '../../assets/olavo.jpeg';
import Photo from '../../assets/pp.jpg';
import Diomedes from '../../assets/profile.jpeg';
import Right1 from '../../assets/right-1.png';
import Right2 from '../../assets/right-2.png';
import Right3 from '../../assets/right-3.png';
import Right5 from '../../assets/right-5.png';
import Samurai from '../../assets/samurai.jpg';

const Videos: React.FC = () => {
  const [upload, onUpload] = useState(false);
  const [open, onOpen] = useState(false);
  const [published, onPublished] = useState(false);

  return (
    <>
      <main className="flex flex-col w-full">
        <SectionName
          server="Videos"
          button={() => onUpload(true)}
          name="Yammartins"
          profile={Photo}
          buttonname="Adicionar novo vídeo"
        />
        <div className="content">
          <div className="videos">
            <div className="wrapper-featured">
              <MainCards id={1} image={Header1} author={Diomedes} name="Yam Prado Martins" title="HZC - Life is... / 2021" views={33} duration={52} way="#play" icon="play" button="Assistir agora" type="video" info="Vídeo em destaque" />
              <div className="most-recent">
                <div className="flex gap-2">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeos recentes</h3>
                  <a href="#morevideos" className="font-sans text-smbut text-blma">
                    Ver todos
                  </a>
                </div>
                <div className="most-recent-list">
                  <MiniCards id={1} image={Right1} author="Júlia Fonseca" title="HZC - Love machine" />
                  <MiniCards id={2} image={Right2} author="Júlia Fonseca" title="HZC - Vol.3" />
                  <MiniCards id={3} image={Right3} author="O Rappa" title="HZC - Pescaria na Urca" />
                  <MiniCards id={4} image={Farney} author="Dick Farney" title="Meus momentos" />
                  <MiniCards id={5} image={Right5} author="Yamandu Costa" title="Histórias do violão" />
                </div>
              </div>
            </div>
            <h2 className="font-bold text-h3 text-wt">
              Vídeos mais vistos
            </h2>

            <div className="most-seen">
              <Swiper
                modules={[Pagination]}
                spaceBetween={32}
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <Link to="/videos/article">
                    <Cards id={1} image={Video1} author={Cruyff} name="Johann Cruyff" title="HZC - Tudo sem padrin" duration={42} type="video" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Cards id={2} image={Video2} author={Diomedes} name="Diomedes" title="Ilíada - Segunda batalha" duration={48} type="video" />
                </SwiperSlide>
                <SwiperSlide>
                  <Cards id={3} image={Video3} author={Samurai} name="Musashi" title="Livro - caminho dos cinco anéis" duration={55} type="video" />
                </SwiperSlide>
                <SwiperSlide>
                  <Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" />
                </SwiperSlide>
                <SwiperSlide>
                  <Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" />
                </SwiperSlide>
                <SwiperSlide>
                  <Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
      <UploadVideo show={upload} onShow={onUpload} onPublish={onOpen} />
      <PublishVideo show={open} onShow={onOpen} onConfirm={onPublished} />
      <VideoPublished video="Gatin G Gorro" show={published} onShow={onPublished} />
    </>
  );
};

export default Videos;
