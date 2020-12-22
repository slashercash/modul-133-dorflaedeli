import styled from 'styled-components';

const HeaderBarStyle = styled.header`
  a {
    display: flex;
    text-decoration: none;

    * {
      text-align: center;
      font-size: 8vw;
      border: solid 0.7vw #6d963b;
    }
  }

  .headerbar-left {
    color: white;
    background-color: #6d963b;
    border-right: 0;
    border-radius: 3vw 0 0 3vw;
    width: 39%;
  }

  .headerbar-right {
    color: #6d963b;
    border-radius: 0 3vw 3vw 0;
    width: 71%;
  }
`;

export default HeaderBarStyle;
