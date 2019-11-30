import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { omdbapi } from '../../services/api';

import * as S from './styles';

export default function Movies() {
  const [movieInfo, setMovieInfo] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function loadInfo() {
      const response = await omdbapi.get(`&t=${name}&plot=full`);
      console.log(response.data);
      setMovieInfo(response.data);
    }
    loadInfo();
  }, [name]);

  return (
    <S.Container img={movieInfo.Poster}>
      <img src={movieInfo.Poster} alt="" />
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
    </S.Container>
  );
}
