import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Picos from './pages/Picos';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/picos" element={<Picos />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
