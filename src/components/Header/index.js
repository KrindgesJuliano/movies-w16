import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Title>
          <a href="/">Testes</a>
        </S.Title>
        <S.Menu>
          <Link to="discover" />
          <p>Discover</p>
        </S.Menu>
      </S.Container>
    </S.Header>
  );
}
