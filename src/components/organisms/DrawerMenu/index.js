import React from 'react';
import { routes } from '../../../helpers/routes';
import { StyledDrawerMenu, StyledLink } from './StyledDrawerMenu';

const DrawerMenu = ({ isOpen }) => {
  return (
    <StyledDrawerMenu isOpen={isOpen}>
      <StyledLink to={routes.home}>Home</StyledLink>
      <StyledLink to={routes.products}>Products</StyledLink>
      <StyledLink to={routes.contact}>Contact</StyledLink>
    </StyledDrawerMenu>
  );
};

export default DrawerMenu;
