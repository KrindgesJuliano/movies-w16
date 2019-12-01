import React, { useEffect, useState } from 'react';

import { api, apiKey } from '../../services/tmdbAPI';

import MovieCard from '../MovieCard';
import Container from '../Container';

import * as S from './styles';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get(`movie/now_playing?api_key=${apiKey}`);

      setMovies(response.data.results);
    }
    loadMovies();
  }, []);

  return (
    <Container>
      <S.Container>
        <h1>Nos Cinemas</h1>
        <S.List>
          {movies.map(movie => (
            <MovieCard key={movie.title} data={movie} />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
}
