import styled from 'styled-components';
import media from 'styled-media-query';

import * as T from '../../Styles/typography';

export const MoviesDetails = styled.section`
  background: rgba(41, 165, 240, 0.4);
  background: linear-gradient(
    90deg,
    rgba(41, 165, 240, 1) 0%,
    rgba(21, 246, 240, 1) 100%
  );
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  height: 500px;
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;

  img {
    padding: 30px;
    height: 100%;
    flex: 1;
    object-fit: fill;
  }

  ${media.lessThan('medium')`;
    height: 400px;

    img {

      height: 300px;
      width: 200px;
    }
  `}
`;

export const Details = styled.div`
  padding: 30px;
  color: #fff;

  h1 {
    ${T.Heading1}
    margin-bottom: 10px;
  }

  > span {
    font-size: 1rem;
    color: #333;
  }

  h2 {
    font-size: 1rem;
  }
`;

export const About = styled.div`
  margin-top: 20px;
  min-height: 60%;
  position: relative;

  h1 {
    ${T.Heading3}
    font-weight: bold;
  }

  p {
    line-height: 1.3rem;
  }

  > div {
    margin-top: 10px;
    position: absolute;
    bottom: 0;
    left: 0;

    p {
      font-weight: bold;
    }
  }

  ${media.lessThan('medium')`;
    min-height: 200px;
  `}
`;

export const Awards = styled.h2`
  margin: 30px 0;
  position: absolute;
  bottom: 0;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  margin: 20px;
`;
