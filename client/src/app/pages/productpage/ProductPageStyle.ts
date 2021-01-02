import styled from 'styled-components';

const ProductPageStyle = styled.main`
  p {
    margin: 15px 0;
  }

  > .product-view {
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

  @media (max-width: 800px) {
    > .product-view {
      > img,
      > div {
        width: 100%;
        > div {
          width: 100%;
          margin-left: 0;
          button {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default ProductPageStyle;
