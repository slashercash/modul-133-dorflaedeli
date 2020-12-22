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
`;

export default AppStyle;
