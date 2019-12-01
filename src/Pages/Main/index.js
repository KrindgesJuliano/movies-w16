import React from 'react';

import Search from '../../components/Search';
import MoviesList from '../../components/MoviesList';

import * as S from './styles';

export default function Main() {
  return (
    <S.Container>
      <Search />
      <MoviesList />
    </S.Container>
  );
}
