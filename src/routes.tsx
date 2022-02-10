import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './layouts/App';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Picos from './pages/Picos';
import PicosArticle from './pages/PicosArticle';
import Videos from './pages/Videos';
import VideosArticle from './pages/VideosArticle';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>

      <Route path="login" element={<Login />} />

      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />

        <Route path="picos" element={<Picos />} />

        <Route path="picos/article" element={<PicosArticle />} />

        <Route path="videos" element={<Videos />} />

        <Route path="videos/article" element={<VideosArticle />} />

      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
