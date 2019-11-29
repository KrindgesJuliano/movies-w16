import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import * as S from './styles';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ movie }) {
    setLoading(true);

    try {
      const response = await api.get(`&s=${movie}`);

      setMovies(response.data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="movie" placeholder="Titanic" />

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
