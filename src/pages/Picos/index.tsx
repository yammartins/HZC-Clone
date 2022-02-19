import { Link } from 'react-router-dom';

import Cards from '~/components/Cards';
import MiniCards from '~/components/MiniCards';
import SectionName from '~/layouts/SectionName';

import Location from '../../assets/pico.png';
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

const Picos: React.FC = () => (
  <div className="flex w-full">
    <main className="w-full h-full flex">
      <SectionName
        server="Picos"
        profile={Diomedes}
        hasNotifications
        button={() => {}}
        buttonname="Adicionar um novo pico"
      />
      <div className="picos">
        <div className="picos-location">
          <div className="map-of-points">
            <img src={Location} alt="nossos pontos favoritos" className="map-of-points-image" />
          </div>
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
          <Link to="/picos/article">
            <Cards id={1} image={Pico1} author={Samurai} name="Bruno Lopes" title="Gap do Itaú da Voluntários da Pátria" type="post" view={53} />
          </Link>
          <Cards id={2} image={Pico2} author={Schiller} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
          <Cards id={3} image={Pico3} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
          <Cards id={4} image={Pico4} author={Diomedes} name="Olavo de Carvalho" title="O abandono dos ideiais" type="post" view={53} />
        </div>
      </div>
    </main>
  </div>
);

export default Picos;
