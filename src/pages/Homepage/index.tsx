import { useMemo, useState, useEffect } from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cards from '~/components/Cards';
import MainCards from '~/components/MainCards';
import MiniCards from '~/components/MiniCards';
import SectionName from '~/layouts/SectionName';
import api from '~/services';
import { VideoHandles } from '~/types';

import Ademir from '../../assets/ademir.jpeg';
import Video1 from '../../assets/album-1.png';
import Video2 from '../../assets/album-2.png';
import Video3 from '../../assets/album-3.png';
import COF from '../../assets/banner.jpg';
import Carpeaux from '../../assets/carpeaux.jpeg';
import Cruyff from '../../assets/cruyff.jpeg';
import Farney from '../../assets/farney.jpeg';
import Junger from '../../assets/junger.jpeg';
import Left17 from '../../assets/left-1-7.png';
import Left2 from '../../assets/left-2.png';
import Left36 from '../../assets/left-3-6.png';
import Left4 from '../../assets/left-4.png';
import Left5 from '../../assets/left-5.png';
import Header2 from '../../assets/mainheader2.png';
import Olavo from '../../assets/olavo.jpeg';
import Professor from '../../assets/professor.jpeg';
import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';
import SaoJanuario from '../../assets/saojanuario.jpeg';
import Shirt2 from '../../assets/shirt-2.png';

const Homepage: React.FC = () => {
  const [videos, onVideos] = useState<VideoHandles | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/videos?populate=*');

      onVideos(data as VideoHandles);
    };

    fetch();
  }, []);

  const filtered = useMemo(() => {
    // 1º Filtrar o estados de videos e retornar somente 1 video de destaque. "filter"
    // 2° Colocar os videos em ordem decrescente tomando como referência o "publishAt"
    // 3° Colocar os videos em ordem decrescente tomando como referência o "views"

    const featured = videos?.data.filter((video) => video.attributes.featured)[0];

    const recents = videos?.data.sort((a, b) => (a
      .attributes.publishedAt > b.attributes.publishedAt ? 1 : -1));

    const views = videos?.data.sort((a, b) => a.attributes.views - b.attributes.views);

    return ({
      views,
      recents,
      featured,
    });
  }, [videos?.data]);

  console.log(filtered.views);
  if (! filtered.featured || ! filtered.recents || ! filtered.views) return <h1>carregando</h1>;

  return (
    <div className="flex-col sm:flex w-full">
      <main className="flex flex-col w-full scroll-smooth">
        <SectionName server="Início" profile={Diomedes} hasNotifications />
        <div className="content">
          <div className="videos">
            <div className="wrapper-featured">
              <MainCards id={filtered.featured?.id} image={`${import.meta.env.VITE_DATABASE_URL}${filtered.featured.attributes.banner.data.attributes.url}`} author={Diomedes} name="Yam Prado Martins" title={filtered.featured?.attributes.name} views={filtered.featured?.attributes.views} duration={filtered.featured?.attributes.duration} way="#play" icon="play" button="Assistir agora" type="video" info="Vídeo em destaque" />
              <div className="most-recent">
                <div className="flex gap-2 items-center justify-between">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeos recentes</h3>
                  <a href="#morevideos" className="font-sans text-smbut text-blma">
                    Ver todos
                  </a>
                </div>
                <div className="most-recent-list">
                  {filtered.recents.map(({
                    id, url, name, view,
                  }) => (
                    <MiniCards key={id} id={id} image={url} author="Júlia Fonseca" title="HZC - Love machine" />
                  ))}
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
                slidesPerView={1}
                breakpoints={{
                  1310: {
                    spaceBetween: 32,
                    slidesPerView: 4,
                  },
                  1050: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                  900: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide><Cards id={1} image={Video1} author={Cruyff} name="Johann Cruyff" title="HZC - Tudo sem padrin" duration={42} type="video" /></SwiperSlide>
                <SwiperSlide><Cards id={2} image={Video2} author={Diomedes} name="Diomedes" title="Ilíada - Segunda batalha" duration={48} type="video" /></SwiperSlide>
                <SwiperSlide><Cards id={3} image={Video3} author={Samurai} name="Musashi" title="Livro - caminho dos cinco anéis" duration={55} type="video" /></SwiperSlide>
                <SwiperSlide><Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" /></SwiperSlide>
                <SwiperSlide><Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" /></SwiperSlide>
                <SwiperSlide><Cards id={4} image={COF} author={Olavo} name="Olavo de Carvalho" title="Artigo - o milagre da solidão" duration={21} type="video" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <h2 className="font-bold text-h3 text-wt">
            Artes
          </h2>
          <div className="arts">
            <div className="wrapper-featured">
              <div className="most-recent">
                <div className="flex gap-2 items-center justify-between">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeos recentes</h3>
                  <a href="#morevideos" className="font-sans text-leg text-blma">
                    Ver todos
                  </a>
                </div>
                <div className="most-recent-list">
                  <MiniCards id={1} image={Left17} title="Sem título 01" author="Antonio Tebyriçá" />
                  <MiniCards id={2} image={Left2} title="Sem título 02" author="Antonio Tebyriçá" />
                  <MiniCards id={3} image={Left36} title="Segurança" author="Raphael Gibson" />
                  <MiniCards id={4} image={Left4} title="Malunguisse" author="Carolina Cannavarro" />
                  <MiniCards id={5} image={Left5} title="Coroa da converse" author="Nikolas de Murtas" />
                  <MiniCards id={6} image={Left36} title="Segurança" author="Raphael Gibson" />
                  <MiniCards id={7} image={Left17} title="Sem título 03" author="Antonio Tebyriçá" />
                </div>
              </div>
              <MainCards id={2} image={Header2} author={Diomedes} name="João ZMS" title="Only Zikas - Lagoa Dompa Club" views={33} duration={52} way="#play" icon="cart" button="Comprar agora" type="arts" info="Nova arte" price={33.33} />
            </div>
            <h2 className="font-bold text-h3 text-wt">
              Camisas mais recentes
            </h2>
            <div className="most-seen">
              <Swiper
                modules={[Pagination]}
                spaceBetween={32}
                slidesPerView={1}
                breakpoints={{
                  1310: {
                    spaceBetween: 32,
                    slidesPerView: 4,
                  },
                  1050: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                  900: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide><Cards id={1} image={SaoJanuario} author={Ademir} name="Ademir de Menezes" title="Histórias de São Januário" duration={42} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={2} image={Video2} author={Junger} name="Diomedes" title="Ilíada - Segunda batalha" duration={48} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={3} image={Video3} author={Carpeaux} name="Musashi" title="Livro - caminho dos cinco anéis" duration={55} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={4} image={Shirt2} author={Professor} name="Olavo de Carvalho" title="Huflez Crew Philosophy Club" duration={21} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={1} image={SaoJanuario} author={Ademir} name="Ademir de Menezes" title="Histórias de São Januário" duration={42} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={2} image={Video2} author={Junger} name="Diomedes" title="Ilíada - Segunda batalha" duration={48} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={3} image={Video3} author={Carpeaux} name="Musashi" title="Livro - caminho dos cinco anéis" duration={55} type="arts" price={33.33} /></SwiperSlide>
                <SwiperSlide><Cards id={4} image={Shirt2} author={Professor} name="Olavo de Carvalho" title="Huflez Crew Philosophy Club" duration={21} type="arts" price={33.33} /></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
