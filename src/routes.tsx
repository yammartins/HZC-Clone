import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useAuth } from '~/contexts';

import App from './layouts/App';
import Test from './layouts/Test';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Picos from './pages/Picos';
import PicosArticle from './pages/PicosArticle';
import Register from './pages/Register';
import Videos from './pages/Videos';
import VideosArticle from './pages/VideosArticle';

const Router: React.FC = () => {
  const [loading, onLoading] = useState(true);

  const {
    fetch,
    authenticated,
  } = useAuth();

  useEffect(() => {
    fetch();

    onLoading(false);
  }, []); // eslint-disable-line

  if (loading) return <h1>Loading ...</h1>;

  return (
    <BrowserRouter>
      <Routes>

        {! authenticated
          ? (
            <Route path="/">
              <Route index element={<Login />} />

              <Route path="register" element={<Register />} />
            </Route>
          ) : (
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />

              <Route path="teste" element={<Test />} />

              <Route path="picos" element={<Picos />} />

              <Route path="picos/article" element={<PicosArticle />} />

              <Route path="videos" element={<Videos />} />

              <Route path="videos/article" element={<VideosArticle />} />

            </Route>
          )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
