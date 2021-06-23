import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import RootContext from '../../../context/RootContext';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import NotificationCount from '../../atoms/NotificationCount';
import { routes } from '../../../helpers/routes';
import {
  StyledDrawerMenu,
  StyledLink,
  StyledUserWrapper,
  StyledCartInfoWrapper,
  StyledLoginLink,
  StyledSigninLink,
} from './StyledDrawerMenu';

const DrawerMenu = ({ isOpen }) => {
  const { toggleMenuOpen, cart } = useContext(RootContext);
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <StyledDrawerMenu onClick={toggleMenuOpen} isOpen={isOpen}>
      <StyledLink to={routes.home}>Home</StyledLink>
      <StyledLink to={routes.products}>Products</StyledLink>
      <StyledLink to={routes.contact}>Contact</StyledLink>
      <StyledUserWrapper>
        {currentUser ? (
          <>
            <Paragraph secondary>{currentUser.email}</Paragraph>
            <StyledCartInfoWrapper>
              <Paragraph>Your Cart: </Paragraph>
              <NotificationCount value={cart.length} />
            </StyledCartInfoWrapper>
            <Button onClickFn={logOut}>LOG OUT</Button>
          </>
        ) : (
          <>
            <StyledLoginLink to={routes.login}>LOG IN</StyledLoginLink>
            <StyledSigninLink to={routes.signup}>SIGN IN</StyledSigninLink>
          </>
        )}
      </StyledUserWrapper>
    </StyledDrawerMenu>
  );
};

export default DrawerMenu;
