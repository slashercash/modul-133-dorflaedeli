import React from 'react';
import ButtonStyle from './ButtonStyle';

interface IButton {
  buttonText: string;
  onClick: () => void;
}

const Button = ({ buttonText, onClick }: IButton) => (
  <React.Fragment>
    <ButtonStyle>
      <button onClick={onClick}>{buttonText}</button>
    </ButtonStyle>
  </React.Fragment>
);

export default Button;
