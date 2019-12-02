import axios from 'axios';

const api = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=1e8d2340&`,
});

export default api;
