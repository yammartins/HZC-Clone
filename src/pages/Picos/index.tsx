import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map } from 'mapbox-gl';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Cards from '~/components/Cards';
import MiniCards from '~/components/MiniCards';
import SectionName from '~/layouts/SectionName';

import Pico1 from '../../assets/pico1.png';
import Pico2 from '../../assets/pico2.png';
import Pico3 from '../../assets/pico3.png';
import Pico4 from '../../assets/pico4.png';
import Diomedes from '../../assets/profile.jpeg';
import Right1 from '../../assets/right-1.png';
import Right2 from '../../assets/right-2.png';
import Right3 from '../../assets/right-3.png';
import Right4 from '../../assets/right-4.png';
import Right5 from '../../assets/right-5.png';
import Samurai from '../../assets/samurai.jpg';
import Schiller from '../../assets/schiller.jpg';

mapboxgl.accessToken = 'pk.eyJ1IjoieWFtbWFydGlucyIsImEiOiJjbDA3MHFqZXEyM3A1M2NucHFsOTdkeHEwIn0.UX0957VfJhOZvRl-S5Z6HQ';

const Picos: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  const [lng, setLng] = useState(-43.177);
  const [lat, setLat] = useState(-22.897);
  const [zoom, setZoom] = useState(16.28);

  useEffect(() => {
    if (! map.current) return; // wait for map to initialize

    map.current.on('move', () => {
      setLng(Number(map.current?.getCenter().lng.toFixed(4)));
      setLat(Number(map.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current?.getZoom().toFixed(2)));
    });
  });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: 'mapbox://styles/yammartins/cl070rofp000h14mzk6s82zkt',
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    map.current?.on('load', () => {
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
  });

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
              <MiniCards id={1} image={Right1} author="Júlia Fonseca" title="Wallride da FGP" />
              <MiniCards id={2} image={Right2} author="Júlia Fonseca" title="Borda de valores" />
              <MiniCards id={3} image={Right3} author="Júlia Fonseca" title="Wallride do Rebouças" />
              <MiniCards id={4} image={Right4} author="Júlia Fonseca" title="Segundo setor da Praça Mauá" />
              <MiniCards id={5} image={Right5} author="Júlia Fonseca" title="Borda de valores" />
              <MiniCards id={6} image={Right1} author="Júlia Fonseca" title="Wallride do Rebouças" />
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
            <SwiperSlide>
              <Link to="/picos/article">
                <Cards id={1} image={Pico1} author={Samurai} name="Bruno Lopes" title="Gap do Itaú da Voluntários da Pátria" type="post" view={53} />
              </Link>
            </SwiperSlide>
            <SwiperSlide><Cards id={2} image={Pico2} author={Schiller} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} /></SwiperSlide>
            <SwiperSlide><Cards id={3} image={Pico3} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} /></SwiperSlide>
            <SwiperSlide><Cards id={4} image={Pico4} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Picos;
