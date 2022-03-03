import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Map } from 'mapbox-gl';

import Cards from '~/components/Cards';
import SectionName from '~/layouts/SectionName';

import { ReactComponent as ViewIcon } from '../../assets/icons/views.svg';
import Imagem1 from '../../assets/imagem1.png';
import Imagem2 from '../../assets/imagem2.png';
import Location from '../../assets/pico.png';
import Pico1 from '../../assets/pico1.png';
import Pico2 from '../../assets/pico2.png';
import Pico3 from '../../assets/pico3.png';
import Pico4 from '../../assets/pico4.png';
import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';
import Schiller from '../../assets/schiller.jpg';

const PicosArticle: React.FC = () => {
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
    <main className="flex flex-col w-full">
      <SectionName
        profile={Diomedes}
        hasNotifications
      />
      <div className="pico-box">
        <div className="body-of-article">
          <div ref={mapContainer} className="map-of-points" />
          <div className="text-of-article">
            <h2 className="text-h2 font-semibold text-wt">
              Gap do Itaú da Voluntários da Pátria
            </h2>
            <div className="profile-author">
              <div className="author">
                <img src={Diomedes} alt="foto do autor" className="rounded-full object-cover w-12 h-12" />
                <cite>Bruno Lopes</cite>
              </div>
              <span className="views">
                <ViewIcon />
                {' '}
                53 visualizações
              </span>
            </div>
            <div className="text">
              <p className="paragraph">
                Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
                Recusandae, ridiculus porta nec eaque? Excepteur aut do
                quisquam ultricies, quos! Morbi ad magna sunt anim imperdiet
                iusto hymenaeos voluptate? Nostrum sapien hic non occaecat!
                Facilis interdum debitis, deserunt fermentum quas mattis interdum penatibus.
                Dictum laboris diamlorem, repellat, aut ligula.
                Quam tellus, facilisis possimus?
                Quidem nunc! Aenean sem! Curabitur eos felis porro integer consectetuer consectetur.
                Porttitor, convallis, sapien earum inventore dapibus facilis, facilis semper.
                Tempora senectus dictumst odio vivamus pariatur, praesentium laoreet,
                hendrerit duis proin excepturi, torquent et, sem,
                eu temporibus aut placerat nostrum.
                Parturient perspiciatis nesciunt. Earum ligula habitasse quo laoreet.
              </p>
              <img src={Location} alt="Foto do texto" className="photo" />
              <p className="paragraph">
                Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
                Recusandae, ridiculus porta nec eaque? Excepteur aut do quisquam ultricies, quos!
                Morbi ad magna sunt anim imperdiet iusto hymenaeos voluptate?
                Nostrum sapien hic non occaecat! Facilis interdum debitis,
                deserunt fermentum quas mattis interdum penatibus.
                Dictum laboris diamlorem, repellat, aut ligula.
                Quam tellus, facilisis possimus? Quidem nunc!
                Aenean sem! Curabitur eos felis porro integer consectetuer consectetur.
                Porttitor, convallis, sapien earum inventore dapibus facilis, facilis semper.
                Tempora senectus dictumst odio vivamus pariatur, praesentium laoreet,
                hendrerit duis proin excepturi, torquent et, sem, eu temporibus aut placerat
                nostrum. Parturient perspiciatis nesciunt. Earum ligula habitasse quo laoreet.
              </p>
              <div className="image-text">
                <img src={Imagem1} alt="" className="w-full" />
                <img src={Imagem2} alt="" className="w-full" />
              </div>
              <p className="paragraph">
                Venenatis maecenas animi eiusmod nostrum, mauris alias quas.
                Recusandae, ridiculus porta nec eaque? Excepteur aut do quisquam ultricies, quos!
                Morbi ad magna sunt anim imperdiet iusto hymenaeos voluptate?
                Nostrum sapien hic non occaecat! Facilis interdum debitis,
                deserunt fermentum quas mattis interdum penatibus.
                Dictum laboris diamlorem, repellat, aut ligula.
                Quam tellus, facilisis possimus? Quidem nunc!
                Aenean sem! Curabitur eos felis porro integer consectetuer consectetur.
                Porttitor, convallis, sapien earum inventore dapibus facilis, facilis semper.
                Tempora senectus dictumst odio vivamus pariatur, praesentium laoreet,
                hendrerit duis proin excepturi, torquent et, sem, eu temporibus aut placerat
                nostrum. Parturient perspiciatis nesciunt. Earum ligula habitasse quo laoreet.
              </p>
            </div>
          </div>
        </div>
        <div className="pico-more">
          <h2 className="text-h4 text-wt font-bold">Outros similares</h2>
          <div className="most-seen flex-col gap-4">
            <Link to="/picos/article">
              <Cards id={1} image={Pico1} author={Samurai} name="Bruno Lopes" title="Gap do Itaú da Voluntários da Pátria" type="post" view={53} />
            </Link>
            <Cards id={2} image={Pico2} author={Schiller} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
            <Cards id={3} image={Pico3} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
            <Cards id={4} image={Pico4} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PicosArticle;
