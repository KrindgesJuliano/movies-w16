import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';

import * as S from './styles';

export default function MoviesDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get(`&t=${name}&plot=full`);
      console.log(response.data);
      setMovieInfo(response.data);
    }
    loadInfo();
  }, [name]);

  return (
    <S.MoviesDetails>
      <Container>
        <S.Wrapper>
          <img src={movieInfo.Poster} alt={movieInfo.Title} />
          <S.Details>
            <h1>
              {movieInfo.Title}
              <span>({movieInfo.Year})</span>
            </h1>

            <h2>{movieInfo.Genre}</h2>

            <S.About>
              <h1>Overview</h1>
              <p>{movieInfo.Plot}</p>
              <div>
                <p>{movieInfo.Director}</p>
                <span>Director</span>
              </div>
            </S.About>
            <S.Awards>Awards: {movieInfo.Awards}</S.Awards>
          </S.Details>
        </S.Wrapper>
      </Container>
    </S.MoviesDetails>
  );
}
