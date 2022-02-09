import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Modal from './components/Modal';
import App from './layouts/App';
import Homepage from './pages/Homepage';
import Picos from './pages/Picos';
import PicosArticle from './pages/PicosArticle';
import Videos from './pages/Videos';
import VideosArticle from './pages/VideosArticle';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />

        <Route path="picos" element={<Picos />} />

        <Route path="picos/article" element={<PicosArticle />} />

        <Route path="videos" element={<Videos />} />

        <Route path="videos/article" element={<VideosArticle />} />

        <Route path="modal" element={<Modal />} />

      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
