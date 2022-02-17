import { Outlet } from 'react-router-dom';

import Menu from '../Menu';

const App: React.FC = () => (
  <div className="sm:flex flex-col sm:flex-row w-full">
    <Menu />
    <Outlet />
  </div>
);

export default App;
