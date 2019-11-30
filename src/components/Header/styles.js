import styled from 'styled-components';
import media from 'styled-media-query';

import * as V from '../../Styles/variables';
import * as T from '../../Styles/typography';

export const Header = styled.header`
  min-height: 100px;
  background: ${V.Colors.darkBlue};
  padding: 1rem 2rem 1rem 2rem;
  color: ${V.Colors.white};
  width: 100%;
  z-index: ${V.ZIndex.header};

  ${media.greaterThan('medium')`
    background-color: ${V.Colors.darkBlue};
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 60px;

  ${media.greaterThan('large')`
    max-width: 1330px;
    margin: 0 auto;
  `}
`;

export const Title = styled.div`
  font-size: ${T.Heading4};
`;

export const Menu = styled.nav`
  align-items: center;
  display: flex;
  ${T.Link}

  ${media.lessThan('small')`
    margin-right: -${V.Space.xs};
  `}

  > *:not(:last-child) {
    margin-right: ${V.Space.xs};
  }
`;
