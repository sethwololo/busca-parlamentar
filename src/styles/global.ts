import { createGlobalStyle } from 'styled-components';
import logoBackground from '../assets/logo-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F5;
    color: #3a3a3a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  input, select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
