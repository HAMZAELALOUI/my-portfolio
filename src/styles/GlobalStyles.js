// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    font-size: 16px;
  }

  #root {
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;