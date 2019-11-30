import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('${props => props.img}');
  background: rgba(41, 165, 240, 0.4);
  background: linear-gradient(
    90deg,
    rgba(41, 165, 240, 1) 0%,
    rgba(21, 246, 240, 1) 100%
  );
  height: 500px;
  min-width: 100vh;
  margin: 0 auto;
  display: flex;

  img {
    padding: 30px;
  }
`;

export const Details = styled.div`
  padding: 30px;
  color: #fff;

  h1 {
    font-size: 2rem;
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

  h1 {
    font-size: 1.5rem;
  }

  p {
    line-height: 1.3rem;
  }

  > div {
    margin-top: 10px;

    p {
      font-weight: bold;
    }
  }
`;

export const Awards = styled.h2``;
