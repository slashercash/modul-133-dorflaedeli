import { createGlobalStyle } from 'styled-components';

const AppStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Arial';
  }

  body {
    margin: 2vw;
  }

  h1 {
    color: #6d963b;
  }
`;

export default AppStyle;
