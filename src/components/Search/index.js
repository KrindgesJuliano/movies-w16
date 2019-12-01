import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../services/api';

import * as S from './styles';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ movie }) {
    setLoading(true);

    try {
      if (movie === '') throw new Error('Search need some value');

      const response = await api.get(`&s=${movie}`);

      if (response.data.Response === 'False')
        throw new Error('There are no movies that matched your search.');

      setMovies(response.data.Search);
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <h1>Search for a Movie, tv show</h1>
        <Input type="text" name="movie" placeholder="Titanic..." />

        <button type="submit">{loading ? 'Carregando...' : 'Procurar'}</button>

        <S.List>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>
              <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </S.List>
      </Form>
    </S.Container>
  );
}
