import styled from 'styled-components';

const CartPageStyle = styled.div`
  .cart-list-header,
  .cart-list-row {
    display: flex;
    flex-wrap: wrap;

    > strong,
    span {
      flex: 1;
    }

    > div {
      flex: 2;
      display: flex;
      > strong,
      span {
        flex: 1;
        &:nth-child(2) {
          text-align: center;
        }
        &:nth-child(3) {
          text-align: right;
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
