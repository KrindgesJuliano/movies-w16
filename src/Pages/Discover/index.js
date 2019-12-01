import React, { useEffect, useState } from 'react';

import { api, apiKey } from '../../services/tmdbAPI';

import MovieCard from '../../components/MovieCard';
import Container from '../../components/Container';

import * as S from './styles';

export default function Discover() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get(`movie/upcoming?api_key=${apiKey}`);

      setMovies(response.data.results);
    }
    loadMovies();
  }, []);

  return (
    <Container>
      <S.Container>
        <h1>Proximos Lançamentos</h1>
        <S.List>
          {movies.map(movie => (
            <MovieCard key={movie.title} data={movie} />
          ))}
        </S.List>
      </S.Container>
    </Container>
  );
}
