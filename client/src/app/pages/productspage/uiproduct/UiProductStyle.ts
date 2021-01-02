import styled from 'styled-components';

const UiProductStyle = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  .product {
    border: solid 3px #6d963b;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0 0 10px #6d963b inset;

    &:hover {
      border-color: orange;
      box-shadow: 0 0 20px orange inset;
    }
  }

  img {
    width: 100%;
  }

  .product-name {
    color: #6d963b;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export default UiProductStyle;
