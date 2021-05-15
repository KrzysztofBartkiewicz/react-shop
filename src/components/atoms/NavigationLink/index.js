import React from 'react';
import { StyledNavigationLink } from './StyledNavigationLink';

const NavigationLink = ({ children, to }) => {
  return <StyledNavigationLink to={to}>{children}</StyledNavigationLink>;
};

export default NavigationLink;
