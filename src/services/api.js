import axios from 'axios';

const omdbapi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=1e8d2340&`,
});

// tmdb api
const apiKey = '&api_key=434c39d56bf96cdb00a410a5678694ba&region=br&';

const tmdapi = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export { omdbapi, tmdapi, apiKey };
