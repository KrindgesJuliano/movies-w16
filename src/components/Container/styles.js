import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${media.greaterThan('medium')`
    max-width: 1110px;
    margin: 0 auto;
    padding: 10px;
  `}

  ${media.between('small', 'medium')`
    max-width: 900px;
    margin: 0 auto;
  `}
`;
