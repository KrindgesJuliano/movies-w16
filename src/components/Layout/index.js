import React from 'react';

import Header from '../Header';

import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}
