import React from 'react';
import { Link } from 'react-router-dom';

import { imgURL } from '../../services/tmdbAPI';

import * as S from './styles';

export default function MovieCard({ data }) {
  return (
    <S.Container>
      <S.Poster src={`${imgURL}${data.poster_path}`} />
      <S.Details>
        <header>
          <h1>{data.title}</h1>
          <h3>{data.release_date}</h3>
        </header>
        <div>
          <p>{data.overview}</p>
        </div>
        <footer>
          <Link to={`/movies/${encodeURIComponent(data.title)}`}>
            Mais detalhes
          </Link>
        </footer>
      </S.Details>
    </S.Container>
  );
}
