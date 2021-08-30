import React from 'react';
import { StyledNavigationLink } from './StyledNavigationLink';

const NavigationLink = ({ children, to, weight, size }) => {
  return (
    <StyledNavigationLink size={size} weight={weight} to={to}>
      {children}
    </StyledNavigationLink>
  );
};

export default NavigationLink;
