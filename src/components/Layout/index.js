import React from 'react';

import Header from '../Header';

import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
}
