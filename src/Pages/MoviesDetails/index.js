import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

import api from '../../services/api';

import Container from '../../components/Container';

import * as S from './styles';

export default function MoviesDetails() {
  const [movieInfo, setMovieInfo] = useState({});
  const [rating, setRating] = useState();
  const [value, setValue] = useState();
  const { name } = useParams();

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get(`&t=${name}&plot=full`);
      setMovieInfo(response.data);
      setRating(parseFloat(response.data.imdbRating));
    }
    loadInfo();
  }, [name]);

  return (
    <>
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
      <Container>
        <S.MoreInfo>
          <S.Box>
            <h3>IMDb Score ({rating})</h3>
            <Rating
              name="read-only"
              value={rating}
              precision={0.5}
              max={10}
              readOnly
            />
          </S.Box>
          <S.Box>
            <h3>Rate it!</h3>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
              max={10}
            />
          </S.Box>
        </S.MoreInfo>
      </Container>
    </>
  );
}
