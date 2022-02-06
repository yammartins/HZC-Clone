import Menu from '~/layouts/Menu';
import SectionName from '~/layouts/SectionName';

const Videos: React.FC = () => (
  <div className="flex w-full">
    <Menu />
    <main className="flex flex-col">
      <SectionName />
    </main>
  </div>
);
