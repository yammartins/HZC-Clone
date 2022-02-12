import 'swiper/css';
import 'swiper/css/pagination';
import '~/styles/main.scss';

import { AuthProvider } from './contexts';
import Router from './routes';

const App: React.FC = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
