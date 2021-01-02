import styled from 'styled-components';

const CartPageStyle = styled.div`
  h1 {
    margin: 20px 0 20px 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    > thead > tr {
      border-radius: 10px 10px 0 0;
      height: 32px;
      color: white;
      background-color: #6d963b;
    }

    > tbody > tr {
      background-color: #d3dfc4;
      &:nth-child(odd) {
        background-color: #f0f4eb;
      }
      &:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
      }
      > td {
        button {
          display: block;
          width: 32px;
        }
        span {
          margin: 0 5px;
        }
      }
    }

    > tfoot > tr > td {
      height: 32px;
      padding: 5px 10px;
      text-align: right;
    }

    > thead > tr,
    > tbody > tr {
      padding: 5px 10px;
      display: flex;
      flex-wrap: wrap;
      > th,
      > td {
        flex: 2;
        display: flex;
        align-items: center;
        &:nth-child(1) {
          flex: 3;
        }
        &:nth-child(3) {
          justify-content: center;
        }
        &:nth-child(4) {
          justify-content: flex-end;
        }
      }
    }
  }

  @media (max-width: 650px) {
    thead > tr > th:nth-child(1) {
      display: none;
    }
    tbody > tr > td:nth-child(1) {
      flex-basis: 100% !important;
    }
  }
`;

export default CartPageStyle;
