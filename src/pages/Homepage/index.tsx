import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

const Homepage: React.FC = () => (
  <div className="flex w-full">
    <Menu />
    <main className="flex flex-col w-full">
      <SectionName />
      <div className="content">
        ..
      </div>
    </main>
  </div>
);

export default Homepage;
