import styled from 'styled-components';

const CartPageStyle = styled.div`
  * {
    display: flex;
  }

  > strong {
    justify-content: flex-end;
    padding: 5px 10px;
  }

  .cart-list-header {
    color: white;
    background-color: #6d963b;
  }

  .cart-list-row {
    background-color: #d3dfc4;
    &:nth-child(even) {
      background-color: #f0f4eb;
    }
  }

  .cart-list-header,
  .cart-list-row {
    flex-wrap: wrap;
    padding: 5px 10px;

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
