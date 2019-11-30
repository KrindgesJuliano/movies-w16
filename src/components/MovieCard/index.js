import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function MovieCard({ data }) {
  return (
    <S.Container>
      <S.Poster
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
      />
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