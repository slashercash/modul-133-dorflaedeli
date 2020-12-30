import styled from 'styled-components';

const ProductsPageStyle = styled.div`
  .button-link {
    margin: 15px 10px 15px auto;
  }

  .products {
    display: grid;
    grid-gap: 10px;
  }

  @media (min-width: 400px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 650px) {
    .products {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .products {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default ProductsPageStyle;