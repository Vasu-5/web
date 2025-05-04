// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background: #f9f9f9;
    color: #222;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
