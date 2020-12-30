import React from 'react';
import HeaderBarStyle from './HeaderBarStyle';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <React.Fragment>
      <HeaderBarStyle>
        <Link to="/products">
          <div className="headerbar-left">DAVE´S</div>
          <div className="headerbar-right">DORFLAEDELI</div>
        </Link>
      </HeaderBarStyle>
    </React.Fragment>
  );
};

export default HeaderBar;
