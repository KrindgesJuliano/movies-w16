import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      margin: 0 0 15px;
      width: 100%;
      color: #ffffff;
      font-size: 18px;
      line-height: 21px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
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
      text-decoration: none;
    }
  }
`;
