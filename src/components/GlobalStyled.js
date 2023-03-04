import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.dark["500"]};
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans JP', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
