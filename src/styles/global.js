import { createGlobalStyle } from "styled-components";
import Billa from "../assets/Billabong.ttf";

export const GlobalStyle = createGlobalStyle`

  :root {
    --bg: #1B1F29; // Background
    --bgLight: #242A38; // Background Light
    --gradient: linear-gradient(180deg, rgba(47, 47, 47, 0.25) 0%, rgba(47, 47, 47, 0.49) 25.52%, rgba(47, 47, 47, 0.68) 54.17%, rgba(47, 47, 47, 0.9) 79.69%, #2F2F2F 100%);
    --blue: linear-gradient(180deg, #007BFF 0%, #17A2B8 100%); // Azul Gradiente
    --blue-svg: #0CB0E8;
    --white: #FFFFFF;
    --gray: rgba(153, 153, 153, 0.40); // Cinza Transparente
    --darkGray: #4E586E;
    --blueIcons: #0CB0E8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @font-face {
    font-family: "Billa";
    src: url(${Billa});
    font-weight: normal;
    font-style: normal;
    font-weight: lighter;
  }

  main {
    width: 100%;
  }

  body, input {
    font-family: 'Nunito Sans', 'Lato', Helvetica, Sans-Serif;
    border: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
