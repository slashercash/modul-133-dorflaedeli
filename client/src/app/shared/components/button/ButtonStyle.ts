import styled from 'styled-components';

const ButtonStyle = styled.div`
  button {
    padding: 5px;
    font-size: inherit;
    font-weight: bold;
    color: #6d963b;
    background-color: white;
    border: solid 2px #6d963b;
    border-radius: 5px;
    outline: none;

    &:hover {
      cursor: pointer;
      color: white;
      background-color: #6d963b;
    }
  }
`;

export default ButtonStyle;
