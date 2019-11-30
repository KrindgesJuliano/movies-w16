import styled from 'styled-components';

import * as V from '../../Styles/variables';
import * as T from '../../Styles/typography';

export const Container = styled.div`
  box-shadow: ${V.BoxShadow.defaultBox};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 600px;
  max-height: 300px;
  min-height: 300px;
`;

export const Details = styled.div`
  padding: 0 10px;

  > header {
    width: 100%;
    margin-bottom: 20px;

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
    min-height: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > footer {
    border-top: 1px solid #999;
    padding: 10px 0px;
    color: ${V.Colors.brightRed};
  }
`;

export const Poster = styled.img`
  border-radius: 4px 0 0 4px;
  min-height: 100%;
`;
