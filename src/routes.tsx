import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './layouts/App';
import Homepage from './pages/Homepage';
import Picos from './pages/Picos';
import PicosArticle from './pages/PicosArticle';
import Videos from './pages/Videos';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />

        <Route path="picos" element={<Picos />}>
          <Route path="article" element={<PicosArticle />} />
        </Route>

        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
