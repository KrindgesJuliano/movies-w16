import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../Container';

import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <Container>
        <S.Container>
          <S.Title>
            <Link to="/">Home</Link>
          </S.Title>
          <S.Menu>
            <Link to="/discover">Lançamentos</Link>
          </S.Menu>
        </S.Container>
      </Container>
    </S.Header>
  );
}
