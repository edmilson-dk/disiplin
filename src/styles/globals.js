import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
  }

  body,
  button {
    font-family: 'Roboto Slab', serif;
  }

  h1,
  h2,
  h3 {
    font-family: 'Source Serif Pro', serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;

export default GlobalStyle;
