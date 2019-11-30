import styled from 'styled-components';
import media from 'styled-media-query';

import * as V from '../../Styles/variables';
import * as T from '../../Styles/typography';

export const Container = styled.div`
  box-shadow: ${V.BoxShadow.defaultBox};
  border-radius: 4px;
  display: flex;
  height: 300px;
  min-width: 100%;

  ${media.lessThan('medium')`;
    margin: 10px;
    min-width: 100%;
    max-height: 250px;
  `}
`;

export const Details = styled.div`
  padding: 0 10px;

  > header {
    width: 100%;
    margin-bottom: 20px;
    min-height: 70px;

    h1 {
      ${T.Heading3};
    }

    h3 {
      ${T.Heading4}
      color: #444;
    }
  }

  > div {
    ${T.Text2}
    height: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > footer {
    min-height: 30px;
    color: ${V.Colors.brightRed};
  }

  ${media.lessThan('medium')`
    > header {
      margin-bottom: 10px;
      min-height: 40px;
    }

    > div {
      height: 60%;
    }

    > footer {
      min-height: 20px;
      color: ${V.Colors.brightRed};
    }
  `};
`;

export const Poster = styled.img`
  border-radius: 4px 0 0 4px;
  height: 100%;
  width: 200px;
  object-fit: cover;

  ${media.lessThan('medium')`;
    width: auto;
    width: 150px;
    max-height: 100%;
  `}
`;
