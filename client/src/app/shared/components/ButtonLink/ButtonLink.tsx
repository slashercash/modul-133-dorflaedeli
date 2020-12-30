import React from 'react';
import ButtonLinkStyle from './ButtonLinkStyle';
import { Link } from 'react-router-dom';

export interface IButtonLink {
  to: string;
  buttonText: string;
}

const ButtonLink = ({ to, buttonText }: IButtonLink) => {
  return (
    <React.Fragment>
      <ButtonLinkStyle className="button-link">
        <Link to={to}>{buttonText}</Link>
      </ButtonLinkStyle>
    </React.Fragment>
  );
};

export default ButtonLink;
