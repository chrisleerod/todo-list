import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    margin: 0;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Inter;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0px;
    background-color: #14171F;
  }

  h1 {
    font-size: 32px;
    color: white;
    font-weight: 700;
  }
  
  h2 {
      font-size: 16px;
      color: white;
      font-weight: 700;
  }

  p {
      font-size: 16px;
      font-weight: 400;
      color: white;
  }

  .p2 {
      font-size: 16px;
      font-weight: 400;
      color: #D2D3D4;
  }
`;