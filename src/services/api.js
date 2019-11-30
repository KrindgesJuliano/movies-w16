import axios from 'axios';

const omdbapi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=1e8d2340&`,
});

const tmdapi = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=434c39d56bf96cdb00a410a5678694ba&language=pt-BR&page=1&region=br`,
});

export { omdbapi, tmdapi };
