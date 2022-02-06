import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import Picos from './pages/Picos';
import PicosArticle from './pages/PicosArticle';
import Videos from './pages/pVideos';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/picos" element={<Picos />} />

      <Route path="/picos/article" element={<PicosArticle />} />

      <Route path="/videos" element={<Videos />} />

    </Routes>
  </BrowserRouter>
);

export default Router;
