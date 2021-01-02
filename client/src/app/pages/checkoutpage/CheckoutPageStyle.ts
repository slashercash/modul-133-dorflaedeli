import styled from 'styled-components';

const CheckoutPageStyle = styled.main`
  > form {
    max-width: 500px;
    margin: 30px auto;

    > div {
      display: flex;
      flex-wrap: wrap;
      padding: 8px 0;

      > div {
        width: 150px;
      }
      > input {
        flex: 5;
        border: solid 1px #6d963b;
        border-radius: 5px;
        padding: 5px;

        &[type='submit'] {
          font-size: inherit;
          font-weight: bold;
          color: #6d963b;
          background-color: white;
          border-width: 2px;

          &:hover {
            cursor: pointer;
            color: white;
            background-color: #6d963b;
          }
        }
      }
    }
  }
`;

export default CheckoutPageStyle;
