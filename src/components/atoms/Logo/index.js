import React from 'react';
import { iconsTypes } from '../../../helpers/iconsTypes';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={iconsTypes.logo} alt="logo" />
      <h1>
        <span>E-</span>Shop
      </h1>
    </StyledLogo>
  );
};

export default Logo;
