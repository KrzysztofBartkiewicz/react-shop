import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import RootContext from '../../../context/RootContext';
import AuthContext from '../../../context/AuthContext';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import UserMenu from '../../molecules/UserMenu';
import SearchPopup from '../../molecules/SearchPopup';
import Hamburger from '../../atoms/Hamburger';
import DrawerMenu from '../DrawerMenu';
import {
  StyledNavbar,
  StyledNavButtons,
  StyledNavListItem,
  StyledNavList,
  StyledButtonWrapper,
  StyledNotificationCount,
  StyledLink,
  StyledUserMenuWrapper,
} from './StyledNavbar';

const Navbar = () => {
  const {
    cartProductsQuantity,
    isHomeRendered,
    handleCartOpen,
    isMenuOpen,
    toggleMenuOpen,
  } = useContext(RootContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <StyledNavbar isHomeRendered={isHomeRendered}>
      <Link to={routes.home}>
        <Logo isHomeRendered={isHomeRendered} />
      </Link>

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
        <SearchPopup />
        <StyledButtonWrapper>
          <Button
            whiteIcon={isHomeRendered}
            icon={iconsTypes.CartIcon}
            onClickFn={() => handleCartOpen(true)}
          />
          <StyledNotificationCount
            isVisible={cartProductsQuantity !== 0 && true}
            value={cartProductsQuantity}
          />
        </StyledButtonWrapper>
        <StyledUserMenuWrapper>
          {currentUser ? (
            <UserMenu />
          ) : (
            <StyledLink to={routes.login}>
              <iconsTypes.AvatarIcon fill={isHomeRendered ? 'white' : ''} />
            </StyledLink>
          )}
        </StyledUserMenuWrapper>
        <Hamburger
          isOpen={isMenuOpen}
          onClickFn={toggleMenuOpen}
          isHomeRendered={isHomeRendered}
        />
      </StyledNavButtons>
      <DrawerMenu isOpen={isMenuOpen} />
    </StyledNavbar>
  );
};

export default Navbar;
