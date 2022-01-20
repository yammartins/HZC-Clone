import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

const Homepage: React.FC = () => (
  <>
    <aside>
      <Menu />
    </aside>
    <header>
      <SectionName />
    </header>
  </>
);

export default Homepage;
