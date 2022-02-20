import { Link } from 'react-router-dom';

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

const PicosArticle: React.FC = () => (
  <main className="flex flex-col w-full">
    <SectionName
      profile={Diomedes}
      hasNotifications
    />
    <div className="pico-box">
      <div className="body-of-article">
        <div className="article-image">
          <img src={Location} alt="Imagem do artigo" className="w-full" />
        </div>
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

export default PicosArticle;
