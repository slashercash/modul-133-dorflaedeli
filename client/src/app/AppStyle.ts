import { createGlobalStyle } from 'styled-components';

const AppStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #6d963b;
  }

  html {
    font-family: 'Arial';
    height: 100%;

    > body {
      margin: auto;
      background-color: #6d963b;
      max-width: 1000px;
      height: 100%;

      > #root {
        height: 100%;
        display: flex;
        flex-direction: column;

        > header {
          z-index:1;
          padding: 2% 2% 0 2%;
          box-sizing: border-box;
          background-color: white;
          box-shadow: 0 -50px 50px black;
        }

        > main {
          flex-grow: 1;
          width: 100%;
          padding: 0 2% 2% 2%;
          box-sizing: border-box;
          background-color: white;
          box-shadow: 0 -50px 50px black;

          > .navigation {
            display: flex;
            flex-wrap: wrap-reverse;
            justify-content: space-between;
            padding: 10px 10px;

            > h1 {
              margin: auto 0 ;
            }
            > .button-link {
              margin: auto 0 ;
              padding: 10px 0;
            }
          }
        }
      }
    }
  }
`;

export default AppStyle;
