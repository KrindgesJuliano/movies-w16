import React, { useEffect, useState } from 'react';

import { tmdapi, apiKey } from '../../services/api';

import MovieCard from '../../components/MovieCard';

import * as S from './styles';

export default function Discover() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await tmdapi.get(`movie/upcoming?${apiKey}`);

      setMovies(response.data.results);
    }
    loadMovies();
  }, []);

  return (
    <S.Container>
      <h1>Proximos Lançamentos</h1>
      <S.List>
        {movies.map(movie => (
          <MovieCard key={movie.title} data={movie} />
        ))}
      </S.List>
    </S.Container>
  );
}
