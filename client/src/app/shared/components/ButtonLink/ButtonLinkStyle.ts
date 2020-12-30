import styled from 'styled-components';

const ButtonLinkStyle = styled.div`
  width: fit-content;
  padding: 5px 0;

  > a {
    font-weight: bold;
    color: white;
    background-color: #6d963b;
    text-decoration: none;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: orange;
    }
  }
`;

export default ButtonLinkStyle;
