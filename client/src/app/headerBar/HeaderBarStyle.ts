import styled from 'styled-components';

const HeaderBarStyle = styled.header`
  width: 100%;

  > a {
    display: flex;
    text-decoration: none;

    > div {
      text-align: center;
      font-size: 8vw;
      border: solid 0.7vw #6d963b;
    }

    > .headerbar-left {
      color: white;
      background-color: #6d963b;
      border-right: 0;
      border-radius: 3vw 0 0 3vw;
      width: 39%;
    }

    > .headerbar-right {
      color: #6d963b;
      border-radius: 0 3vw 3vw 0;
      width: 71%;
      box-shadow: 0 0 5px #6d963b inset;
    }

    &:hover {
      > div {
        border-color: orange;
      }

      > .headerbar-left {
        background-color: orange;
      }

      > .headerbar-right {
        color: orange;
        box-shadow: 0 0 5px orange inset;
      }
    }
  }

  @media (min-width: 1000px) {
    > a {
      > div {
        font-size: 80px;
        border-width: 6px;
      }

      > .headerbar-left {
        border-radius: 30px 0 0 30px;
      }

      > .headerbar-right {
        border-radius: 0 30px 30px 0;
      }
    }
  }
`;

export default HeaderBarStyle;
