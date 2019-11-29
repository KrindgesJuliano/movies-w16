import axios from 'axios';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=1e8d2340&`,
});

export default api;
