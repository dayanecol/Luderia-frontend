import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url('/static/fonts/Poppins-Regular.ttf');
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: normal;
    src: url('/static/fonts/Poppins-Bold.ttf');
  }
  p {
    font-family: 'Poppins';
    font-weight: 400;
  }
  h1 {
    font-family: 'Poppins';
    font-weight: 700;
  }
`;
