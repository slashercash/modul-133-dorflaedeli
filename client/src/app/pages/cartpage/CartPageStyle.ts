import styled from 'styled-components';

const CartPageStyle = styled.div`
  * {
    display: flex;
  }

  .cart-list-header,
  .cart-list-row {
    flex-wrap: wrap;

    > strong,
    > span {
      flex: 1;
      align-items: center;
    }

    > div {
      flex: 2;
      > strong,
      > span,
      > div {
        flex: 1;
        align-items: center;
        &:nth-child(2) {
          justify-content: center;
        }
        &:nth-child(3) {
          justify-content: flex-end;
        }
        button {
          display: block;
          width: 32px;
        }
        > span {
          margin: 0 5px;
        }
      }
    }
  }

  @media (max-width: 650px) {
    .cart-list-header > strong {
      display: none;
    }
    .cart-list-row {
      display: block;
    }
  }
`;

export default CartPageStyle;
