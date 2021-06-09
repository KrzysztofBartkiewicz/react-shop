import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import RootContext from '../../../context/RootContext';
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
  const { cartProductsQuantity, isHomeRendered, handleCartModalOpen } =
    useContext(RootContext);

  return (
    <StyledNavbar isHomeRendered={isHomeRendered}>
      <Logo isHomeRendered={isHomeRendered} />
      <StyledNavList isHomeRendered={isHomeRendered}>
        <StyledNavListItem>
          <NavigationLink to={routes.home}>Home</NavigationLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <NavigationLink to={routes.products}>Products</NavigationLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <NavigationLink to={routes.contact}>Contact</NavigationLink>
        </StyledNavListItem>
      </StyledNavList>
      <StyledNavButtons isHomeRendered={isHomeRendered}>
        <Button nav whiteIcon={isHomeRendered} icon={iconsTypes.SearchIcon} />
        <StyledButtonWrapper>
          <Button
            nav
            whiteIcon={isHomeRendered}
            icon={iconsTypes.CartIcon}
            onClickFn={handleCartModalOpen}
          />
          <StyledNotificationCount
            isVisible={cartProductsQuantity !== 0 && true}
            value={cartProductsQuantity}
          />
        </StyledButtonWrapper>
        <Link to={routes.login}>
          <Button nav whiteIcon={isHomeRendered} icon={iconsTypes.AvatarIcon} />
        </Link>
      </StyledNavButtons>
    </StyledNavbar>
  );
};

export default Navbar;
