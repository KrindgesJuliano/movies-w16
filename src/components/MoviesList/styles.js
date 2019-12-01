import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  margin-top: 40px;

  > h1 {
    text-align: center;
    margin: 10px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  ${media.lessThan('medium')`;
    display: block;
  `}
`;
