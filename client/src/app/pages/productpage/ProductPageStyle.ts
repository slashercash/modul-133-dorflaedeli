import styled from 'styled-components';

const ProductPageStyle = styled.main`
  .button-link {
    margin: 15px 10px 15px auto;
  }

  p {
    margin: 15px 0;
  }

  > section {
    display: flex;
    flex-wrap: wrap;
    > img,
    > div {
      width: 50%;
      display: flex;
      align-items: center;
      > div {
        margin-left: 40px;
      }
    }
  }

  @media (max-width: 700px) {
    > section {
      > img,
      > div {
        width: 100%;
        > div {
          margin-left: 0;
        }
      }
    }
  }
`;

export default ProductPageStyle;
