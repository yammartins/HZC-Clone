import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

import Cards from '~/components/Cards';
import SectionName from '~/layouts/SectionName';
import api from '~/services';
import { VideoHandles, VideosHandles } from '~/types';

import { ReactComponent as ViewIcon } from '../../assets/icons/views.svg';
import Imagem1 from '../../assets/imagem1.png';
import Imagem2 from '../../assets/imagem2.png';
import Location from '../../assets/pico.png';
import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';
import Profile from '../../assets/vasnetsov.jpeg';

const VideosArticle: React.FC = () => {
  const {
    id,
  } = useParams();

  const [video, onVideo] = useState<VideoHandles | null>(null);
  const [videos, onVideos] = useState<VideosHandles | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get(`/videos/${id}?populate=*`);

      onVideo(data as VideoHandles);
    };

    fetch();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/videos/?populate=*');

      onVideos(data as VideosHandles);
    };

    fetch();
  }, [id]);

  const filtered = useMemo(() => {
    if (videos && videos.data) {
      const typeVideo = videos.data.filter(({ attributes }) => attributes.type === 'VIDEO');

      const others = typeVideo.filter((videos_id) => videos_id.id !== video?.data.id);

      return others.slice(0, 4);
    }
    return null;
  }, [video?.data.id, videos]);

  if (! filtered) return <h1>carregando</h1>;

  return (
    <main className="flex flex-col w-full">
      <SectionName profile={Profile} />
      <div className="video-box">
        <div className="body-of-article">
          <div className="article-video">
            <video
              controls
              muted
              className="rounded-lg"
              preload="metadata"
              width="100%"
              src={`${import.meta.env.VITE_DATABASE_URL}${video?.data.attributes.video.data.attributes.url}`}
            />
          </div>
          <div className="text-of-article">
            <h2 className="text-h2 font-semibold text-wt">
              {video?.data.attributes.name}
            </h2>
            <div className="profile-author">
              <div className="author">
                <img src={Diomedes} alt="foto do autor" className="rounded-full object-cover w-12 h-12" />
                <cite>Bruno Lopes</cite>
              </div>
              <span className="views">
                <ViewIcon />
                {video?.data.attributes.views}
                {' '}
                visualizações
              </span>
            </div>
            <div className="text">
              <p className="paragraph">
                {video?.data.attributes.description}
              </p>
              <img src={Location} alt="Foto do texto" className="photo" />
              <p className="paragraph">
                {video?.data.attributes.description}
              </p>
              <div className="image-text">
                <img src={Imagem1} alt="" className="w-full" />
                <img src={Imagem2} alt="" className="w-full" />
              </div>
              <p className="paragraph">
                {video?.data.attributes.description}
              </p>
            </div>
          </div>
        </div>
        <div className="video-more">
          <h2 className="text-h4 text-wt font-bold">Outros similares</h2>
          <div className="most-seen">
            {filtered.map(({ id: videos_id, attributes }) => (
              <Link to={`/videos/${videos_id}`} key={videos_id}>
                <Cards
                  id={videos_id}
                  image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                  author={Samurai}
                  name="Bruno Lopes"
                  title={attributes.name}
                  type="post"
                  views={attributes.views}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideosArticle;
