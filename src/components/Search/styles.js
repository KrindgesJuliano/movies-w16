import styled from 'styled-components';

import * as V from '../../Styles/variables';

export const Container = styled.div`
  max-width: 700px;
  background: ${V.Colors.whiteSolid};
  border-radius: 4px;
  box-shadow: ${V.BoxShadow.defaultBox};
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;

    input {
      background: ${V.Colors.white};
      border: 2px solid ${V.Colors.lightBlue};
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      margin: 0 0 15px;
      width: 100%;
      color: ${V.Colors.lightBlue};
      font-size: 18px;
      line-height: 21px;
      &::placeholder {
        color: ${V.Colors.lightBlue};
      }
    }
  }

  button {
    background: #f94d6a;
    border: 0;
    height: 42px;
    width: 172px;
    border-radius: 4px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    padding: 0 10px 0 10px;
    align-self: flex-end;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    transition: background 0.2s;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #f94d6a;
    }
  }
`;
