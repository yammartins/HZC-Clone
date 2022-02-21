import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_DATABASE_URL}/api`,
});

export default api;
