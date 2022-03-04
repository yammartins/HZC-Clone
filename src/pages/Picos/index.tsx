import {
  useState, useRef, useEffect, useMemo,
} from 'react';
import { Link } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map } from 'mapbox-gl';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cards from '~/components/Cards';
import MiniCards from '~/components/MiniCards';
import SectionName from '~/layouts/SectionName';
import api from '~/services';
import { PicosHandles } from '~/types/picos';

import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbWFydGlucyIsImEiOiJjbDA3MHFqZXEyM3A1M2NucHFsOTdkeHEwIn0.UX0957VfJhOZvRl-S5Z6HQ';

const promise = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};

const Picos: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  const [lng, setLng] = useState(-43.177);
  const [lat, setLat] = useState(-22.897);
  const [zoom, setZoom] = useState(16.28);
  const [picos, onPicos] = useState<PicosHandles | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/picos?populate=*');

      onPicos(data as PicosHandles);
    };

    fetch();
  }, []);

  const filtered = useMemo(() => {
    if (picos && picos.data) {
      const views = picos.data.sort((a, b) => b.attributes.views - a.attributes.views);

      const recent = picos.data.sort((a, b) => (a.attributes.publishedAt
         > b.attributes.publishedAt ? 1 : -1));

      return ({
        views,
        recent,
      });
    }

    return (null);
  }, [picos]);

  useEffect(() => {
    if (! map.current) return; // wait for map to initialize

    map.current.on('move', () => {
      setLng(Number(map.current?.getCenter().lng.toFixed(4)));
      setLat(Number(map.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current?.getZoom().toFixed(2)));
    });
  }, []);

  useEffect(() => {
    const load = async () => {
      if (map.current) return; // initialize map only once

      await promise();

      map.current = new mapboxgl.Map({
        container: mapContainer.current as HTMLDivElement,
        style: 'mapbox://styles/yammartins/cl070rofp000h14mzk6s82zkt',
        center: [lng, lat],
        zoom,
      });
    };

    load();
  }, [lat, lng, zoom, mapContainer]);

  useEffect(() => {
    if (! map.current) return; // wait for map to initialize

    map.current.on('load', () => {
      /* Add the data to your map as a layer */
      map.current?.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
          if (error) throw error;
          map.current?.addImage('custom-marker', image as HTMLImageElement);
          // Add a GeoJSON source with 2 points
          map.current?.addSource('points', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  // feature for Mapbox DC
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      -42.177, -21.897,
                    ],
                  },
                  properties: {
                    title: 'Mapbox DC',
                  },
                },
                {
                  // feature for Mapbox SF
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-122.414, 37.776],
                  },
                  properties: {
                    title: 'Mapbox SF',
                  },
                },
              ],
            },
          });

          // Add a symbol layer
          map.current?.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': 'custom-marker',
              // get the title name from the source's "title" property
              'text-field': ['get', 'title'],
              'text-font': [
                'Open Sans Semibold',
                'Arial Unicode MS Bold',
              ],
              'text-offset': [0, 1.25],
              'text-anchor': 'top',
            },
          });
        },
      );
    });
  }, []);

  console.log(filtered?.recent);

  if (! picos) return <h1>Carregando</h1>;

  return (
    <main className="w-full h-full flex flex-col">
      <SectionName
        server="Picos"
        profile={Diomedes}
        hasNotifications
        button={() => {}}
        buttonname="Adicionar um novo pico"
      />
      <div className="picos">
        <div className="picos-location">
          <div ref={mapContainer} className="map-of-points" />

          <div className="favorite">
            <div className="header">
              <h3 className="text-h4 font-bold font-sans text-wt">
                Favoritos
              </h3>
              <a href="#more" className="text-smbut text-blma font-semibold">Ver todos</a>
            </div>
            <div className="most-recent-list">
              {filtered?.recent.map(({ id, attributes }) => (
                <MiniCards
                  key={id}
                  id={id}
                  image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                  author="Júlia Fonseca"
                  title={attributes.title}
                />
              ))}
            </div>
          </div>
        </div>
        <h2 className="text-h3 text-wt font-bold">Mais visitados</h2>
        <div className="most-seen gap-8">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
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
            {filtered?.views.map(({ id, attributes }) => (
              <SwiperSlide key={id}>
                <Link to={`/picos/${id}`}>
                  <Cards
                    id={id}
                    image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                    author={Samurai}
                    name="Bruno Lopes"
                    title={attributes.title}
                    type="post"
                    view={53}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Picos;
