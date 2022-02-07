import { Outlet } from 'react-router-dom';

import Menu from '../Menu';

const App: React.FC = () => (
  <div className="flex w-full">
    <Menu />
    <Outlet />
  </div>
);

export default App;
