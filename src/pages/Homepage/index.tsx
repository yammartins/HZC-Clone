import { useMemo, useState, useEffect } from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cards from '~/components/Cards';
import MainCards from '~/components/MainCards';
import MiniCards from '~/components/MiniCards';
import SectionName from '~/layouts/SectionName';
import api from '~/services';
import { VideosHandles } from '~/types';

import Harpya from '../../assets/harpya.jpeg';
import Professor from '../../assets/professor.jpeg';
import Diomedes from '../../assets/profile.jpeg';

const Homepage: React.FC = () => {
  const [videos, onVideos] = useState<VideosHandles | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/videos?populate=*');

      onVideos(data as VideosHandles);
    };

    fetch();
  }, []);

  const filtered = useMemo(() => {
    if (videos && videos.data) {
      const typeArt = videos?.data.filter(({ attributes }) => attributes.type === 'ART') || [];

      const typeVideo = videos?.data.filter(({ attributes }) => attributes.type === 'VIDEO') || [];

      const formatted = (arr: VideosHandles['data']) => {
        const featured = arr.filter(({ attributes }) => attributes.featured)[0] || {};

        const recents = arr.sort((a, b) => (a
          .attributes.publishedAt > b.attributes.publishedAt ? 1 : -1));

        const views = arr.sort((a, b) => b.attributes.views - a.attributes.views);

        return ({
          views,
          recents,
          featured,
        });
      };

      return ({
        arts: formatted(typeArt),
        videos: formatted(typeVideo),
      });
    }

    return null;
  }, [videos]);

  if (! filtered || ! filtered.arts || ! filtered.videos) return <h1>carregando</h1>;

  return (
    <div className="flex-col sm:flex w-full">
      <main className="flex flex-col w-full scroll-smooth">
        <SectionName server="Início" profile={Diomedes} hasNotifications />
        <div className="content">
          <div className="videos">
            <div className="wrapper-featured">
              <MainCards
                id={filtered.videos.featured?.id}
                image={`${import.meta.env.VITE_DATABASE_URL}${filtered.videos.featured.attributes.banner.data.attributes.url}`}
                author={Diomedes}
                name="Yam Prado Martins"
                title={filtered.videos.featured?.attributes.name}
                views={filtered.videos.featured?.attributes.views}
                duration={filtered.videos.featured?.attributes.duration}
                way="#play"
                icon="play"
                button="Assistir agora"
                type="video"
                info="Vídeo em destaque"
              />
              <div className="most-recent">
                <div className="flex gap-2 items-center justify-between">
                  <h3 className="text-h4 font-bold font-sans text-wt">Vídeos recentes</h3>
                  <a href="#morevideos" className="font-sans text-smbut text-blma">
                    Ver todos
                  </a>
                </div>
                <div className="most-recent-list">
                  {filtered.videos.recents.map(({ id, attributes }) => (
                    <MiniCards key={id} id={id} image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`} author="Júlia Fonseca" title={attributes.name} />
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
                  1110: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                  900: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                  },
                }}
              >
                {filtered.videos.views.map(({ id, attributes }) => (
                  <SwiperSlide key={id}><Cards id={id} image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`} author={Harpya} name="Johann Cruyff" title={attributes.name} duration={attributes.duration} type="video" /></SwiperSlide>
                ))}
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
                  {filtered.arts.recents.map(({ id, attributes }) => (
                    <MiniCards
                      key={id}
                      id={id}
                      image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                      title={attributes.name}
                      author="Antonio Tebyriçá"
                    />
                  ))}
                </div>
              </div>
              <MainCards
                id={filtered.arts.featured.id}
                image={`${import.meta.env.VITE_DATABASE_URL}${filtered.arts.featured.attributes.banner.data.attributes.url}`}
                author={Diomedes}
                name="João ZMS"
                title={filtered.arts.featured.attributes.name}
                views={filtered.arts.featured.attributes.views}
                duration={filtered.arts.featured.attributes.duration}
                way="#play"
                icon="cart"
                button="Comprar agora"
                type="arts"
                info="Nova arte"
                price={filtered.arts.featured.attributes.price}
              />
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
                  1110: {
                    spaceBetween: 24,
                    slidesPerView: 3,
                  },
                  900: {
                    spaceBetween: 16,
                    slidesPerView: 2,
                  },
                }}
              >
                {filtered.arts.views.map(({ id, attributes }) => (
                  <SwiperSlide key={id}>
                    <Cards
                      id={id}
                      image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                      author={Professor}
                      name="Olavo de Carvalho"
                      title={attributes.name}
                      duration={attributes.duration}
                      type="arts"
                      price={attributes.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
