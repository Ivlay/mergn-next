import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
    min-height: 100vh;
    transition: background-color 0.25s ease-in, color 0.25s ease-in;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
