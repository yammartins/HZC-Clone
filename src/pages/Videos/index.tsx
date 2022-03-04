import { useState, useMemo, useEffect } from 'react';
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
import api from '~/services';
import { VideosHandles } from '~/types';

import Harpya from '../../assets/harpya.jpeg';
import Photo from '../../assets/pp.jpg';
import Diomedes from '../../assets/profile.jpeg';

const Videos: React.FC = () => {
  const [upload, onUpload] = useState(false);
  const [open, onOpen] = useState(false);
  const [published, onPublished] = useState(false);
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
        videos: formatted(typeVideo),
      });
    }

    return null;
  }, [videos]);

  if (! filtered || ! filtered.videos) return <h1>carregando</h1>;

  return (
    <>
      <main className="flex flex-col w-full">
        <SectionName
          server="Videos"
          button={() => onUpload(true)}
          profile={Photo}
          buttonname="Adicionar novo vídeo"
        />
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
                  <SwiperSlide key={id}>
                    <Link to={`/videos/${id}`}>
                      <Cards
                        id={id}
                        image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                        author={Harpya}
                        name="Johann Cruyff"
                        title={attributes.name}
                        views={attributes.views}
                        duration={attributes.duration}
                        type="video"
                      />
                    </Link>
                  </SwiperSlide>
                ))}
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
