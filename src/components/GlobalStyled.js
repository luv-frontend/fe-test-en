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

  img {
    display: block;
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  /* sprite */
  .sprite { background: url('/sprite.png') no-repeat top left; width: 32px; height: 32px;  } 
  .sprite.component_scroll { background-position: 0 0; width: 48px; height: 48px; } 
  .sprite.icon_challenge { background-position: -58px 0; } 
  .sprite.icon_close { background-position: -100px 0; } 
  .sprite.icon_cup { background-position: -142px 0; width: 56px; height: 56px; } 
  .sprite.icon_info { background-position: -208px 0; } 
  .sprite.icon_knife { background-position: -250px 0; width: 56px; height: 56px; } 
  .sprite.icon_memo { background-position: -316px 0; } 
  .sprite.icon_menu { background-position: -358px 0; } 
  /* 
  <div class='sprite component_scroll'></div>
  <div class='sprite icon_challenge'></div>
  <div class='sprite icon_close'></div>
  <div class='sprite icon_cup'></div>
  <div class='sprite icon_info'></div>
  <div class='sprite icon_knife'></div>
  <div class='sprite icon_memo'></div>
  <div class='sprite icon_menu'></div>
   */
`;

export default GlobalStyle;
