import { Link } from 'react-router-dom';

import Cards from '~/components/Cards';
import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

import Location from '../../assets/pico.png';
import Pico1 from '../../assets/pico1.png';
import Pico2 from '../../assets/pico2.png';
import Pico3 from '../../assets/pico3.png';
import Pico4 from '../../assets/pico4.png';
import Diomedes from '../../assets/profile.jpeg';
import Samurai from '../../assets/samurai.jpg';
import Schiller from '../../assets/schiller.jpg';

const PicosArticle: React.FC = () => (
  <div className="flex w-screen">
    <Menu />
    <main className="">
      <SectionName />
      <div className="pico-box">
        <div className="body-of-article">
          <div className="article-image">
            <img src="" alt="" />
          </div>
          <div className="text-of-article">
            nada a declarar
          </div>
        </div>
        <div className="pico-more">
          <h2>Outros similares</h2>
          <div className="grid gap-4">
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
  </div>
);

export default PicosArticle;
