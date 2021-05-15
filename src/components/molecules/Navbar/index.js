import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import { StyledNavbar, StyledNavItem, StyledNavList } from './StyledNavbar';

const Navbar = () => {
  const context = useContext(RootContext);

  return (
    <StyledNavbar>
      <Logo />
      <StyledNavList>
        <StyledNavItem>
          <NavigationLink to={routes.home}>Home</NavigationLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavigationLink to={routes.products}>Products</NavigationLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavigationLink to={routes.products}>Products2</NavigationLink>
        </StyledNavItem>
      </StyledNavList>
      <Button
        nav
        icon={iconsTypes.cart}
        onClickFn={context.handleCartModalOpen}
      />
    </StyledNavbar>
  );
};

export default Navbar;
