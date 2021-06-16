import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { routes } from '../../../helpers/routes';
import RootContext from '../../../context/RootContext';
import AuthContext from '../../../context/AuthContext';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import NavigationLink from '../../atoms/NavigationLink';
import UserMenu from '../UserMenu';
import SearchPopup from '../SearchPopup';
import {
  StyledNavbar,
  StyledNavButtons,
  StyledNavListItem,
  StyledNavList,
  StyledButtonWrapper,
  StyledNotificationCount,
  StyledLink,
} from './StyledNavbar';

const Navbar = () => {
  const { cartProductsQuantity, isHomeRendered, handleCartModalOpen } =
    useContext(RootContext);
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
            onClickFn={handleCartModalOpen}
          />
          <StyledNotificationCount
            isVisible={cartProductsQuantity !== 0 && true}
            value={cartProductsQuantity}
          />
        </StyledButtonWrapper>
        {currentUser ? (
          <UserMenu />
        ) : (
          <StyledLink to={routes.login}>
            <iconsTypes.AvatarIcon fill={isHomeRendered && 'white'} />
          </StyledLink>
        )}
      </StyledNavButtons>
    </StyledNavbar>
  );
};

export default Navbar;
