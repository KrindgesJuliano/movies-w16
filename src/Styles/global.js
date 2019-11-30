import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: aliceblue;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px 'Montserrat', sans-serif;
  }
  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
  ul{
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
