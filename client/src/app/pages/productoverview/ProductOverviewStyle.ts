import styled from 'styled-components';

const ProductOverviewStyle = styled.div`
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

  @media (max-width: 650px) {
    > img,
    > div {
      width: 100%;
      > div {
        margin-left: 0;
      }
    }
  }

  .product-name {
    color: #6d963b;
    font-size: 30px;
  }

  p {
    margin: 15px 0;
  }
`;

export default ProductOverviewStyle;
