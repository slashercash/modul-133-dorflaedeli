import styled from 'styled-components';

const UiProductStyle = styled.div`
  border: solid 3px #6d963b;
  border-radius: 15px;
  padding: 10px;

  img {
    width: 100%;
  }

  .product-name {
    color: #6d963b;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .product-price {
    display: flex;
  }

  .normal {
    margin-left: 10px;
    color: red;
    text-decoration: line-through;
  }
`;

export default UiProductStyle;
