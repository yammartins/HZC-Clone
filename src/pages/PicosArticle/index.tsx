import {
  useState, useEffect, useRef, useMemo,
} from 'react';
import { Link, useParams } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map } from 'mapbox-gl';

import Cards from '~/components/Cards';
import SectionName from '~/layouts/SectionName';
import api from '~/services';
import { PicoHandles, PicosHandles } from '~/types';

import { ReactComponent as ViewIcon } from '../../assets/icons/views.svg';
import Imagem1 from '../../assets/imagem1.png';
import Imagem2 from '../../assets/imagem2.png';
import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbWFydGlucyIsImEiOiJjbDA3MHFqZXEyM3A1M2NucHFsOTdkeHEwIn0.UX0957VfJhOZvRl-S5Z6HQ';

const promise = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
};

const PicosArticle: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  const [lng, setLng] = useState(-43.177);
  const [lat, setLat] = useState(-22.897);
  const [zoom, setZoom] = useState(16.28);
  const {
    id,
  } = useParams();

  const [pico, onPico] = useState<PicoHandles | null>(null);
  const [picos, onPicos] = useState<PicosHandles | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get(`/picos/${id}?populate=*`);

      onPico(data as PicoHandles);
    };

    fetch();
  }, [id]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/picos/?populate=*');

      onPicos(data as PicosHandles);
    };

    fetch();
  }, [id]);

  const filtered = useMemo(() => {
    if (picos && picos.data) {
      const others = picos.data.filter((picos_id) => picos_id.id !== pico?.data.id);

      return others.slice(0, 4);
    }
    return null;
  }, [pico?.data.id, picos]);

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

  if (! filtered) return <h1>carregando</h1>;

  return (
    <main className="flex flex-col w-full">
      <SectionName
        profile={Diomedes}
        hasNotifications
      />
      <div className="pico-box">
        <div className="body-of-article">
          <img
            src={`${import.meta.env.VITE_DATABASE_URL}${pico?.data.attributes.banner.data.attributes.url}`}
            alt="Foto de capa do artigo"
            className="rounded-2xl h-[30rem] w-full object-cover"
          />
          <div className="text-of-article">
            <h2 className="text-h2 font-semibold text-wt">
              {pico?.data.attributes.title}
            </h2>
            <div className="profile-author">
              <div className="author">
                <img src={Diomedes} alt="foto do autor" className="rounded-full object-cover w-12 h-12" />
                <cite>Bruno Lopes</cite>
              </div>
              <span className="views">
                <ViewIcon />
                {pico?.data.attributes.views}
                {' '}
                visualizações
              </span>
            </div>
            <div className="text">
              <p className="paragraph">
                {pico?.data.attributes.text}
              </p>
              <div ref={mapContainer} className="map-of-points" />
              <p className="paragraph">
                {pico?.data.attributes.text}
              </p>
              <div className="image-text">
                <img src={Imagem1} alt="" className="w-full" />
                <img src={Imagem2} alt="" className="w-full" />
              </div>
              <p className="paragraph">
                {pico?.data.attributes.text}
              </p>
            </div>
          </div>
        </div>
        <div className="pico-more">
          <h2 className="text-h4 text-wt font-bold">Outros similares</h2>
          <div className="most-seen flex-col gap-4">
            {picos?.data.map(({ id: id_p, attributes }) => (
              <Link to={`/picos/${id_p}`} key={id_p}>
                <Cards
                  id={id_p}
                  image={`${import.meta.env.VITE_DATABASE_URL}${attributes.banner.data.attributes.url}`}
                  author={Samurai}
                  name="Bruno Lopes"
                  title={attributes.title}
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

export default PicosArticle;
