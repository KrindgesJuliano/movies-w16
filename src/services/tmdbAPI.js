import axios from 'axios';

const apiKey = '434c39d56bf96cdb00a410a5678694ba';

const imgURL = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/`;

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export { apiKey, api, imgURL };
