import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import {
  StyledNavbar,
  StyledNavButtons,
  StyledNavListItem,
  StyledNavList,
  StyledButtonWrapper,
  StyledNotificationCount,
} from './StyledNavbar';

const Navbar = () => {
  const context = useContext(RootContext);
  const { cartProductsQuantity } = context;

  return (
    <StyledNavbar>
      <Logo />
      <StyledNavList>
        <StyledNavListItem>
          <NavigationLink to={routes.home}>Home</NavigationLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <NavigationLink to={routes.products}>Products</NavigationLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <NavigationLink to={routes.products}>Products2</NavigationLink>
        </StyledNavListItem>
      </StyledNavList>
      <StyledNavButtons>
        <Button nav icon={iconsTypes.search} />
        <StyledButtonWrapper>
          <Button
            nav
            icon={iconsTypes.cart}
            onClickFn={context.handleCartModalOpen}
          />
          <StyledNotificationCount
            isVisible={cartProductsQuantity !== 0 && true}
            value={cartProductsQuantity}
          />
        </StyledButtonWrapper>

        <Button nav icon={iconsTypes.avatar} />
      </StyledNavButtons>
    </StyledNavbar>
  );
};

export default Navbar;
