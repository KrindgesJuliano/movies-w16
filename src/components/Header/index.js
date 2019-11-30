import React from 'react';

import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Title>
          <a href="/">Testes</a>
        </S.Title>
        <S.Menu>
          <p>Movies</p>
          <p>Discover</p>
        </S.Menu>
      </S.Container>
    </S.Header>
  );
}
