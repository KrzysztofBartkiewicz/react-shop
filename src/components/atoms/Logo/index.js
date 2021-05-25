import React from 'react';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Heading from '../Heading';
import { StyledLogo } from './StyledLogo';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={iconsTypes.logo} alt="logo" />
      <Heading headingType="h6">
        <span>E-</span>Shop
      </Heading>
    </StyledLogo>
  );
};

export default Logo;
