import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import RootContext from '../../../context/RootContext';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import NotificationCount from '../../atoms/NotificationCount';
import { iconsTypes } from '../../../helpers/iconsTypes';
import {
  StyledUserMenu,
  StyledUserName,
  StyledPopupButton,
  StyledPopupWrapper,
  StyledPopupItem,
  StyledPopupCart,
} from './StyledUserMenu';

const UserMenu = ({ isHomeRendered }) => {
  const { currentUser, logOut } = useContext(AuthContext);
  const { cart } = useContext(RootContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <StyledUserMenu>
      <StyledUserName>{currentUser.firstName}</StyledUserName>
      <StyledPopupButton
        whiteIcon={isHomeRendered}
        icon={iconsTypes.ArrowDownIcon}
        onClickFn={handleExpand}
      />
      <StyledPopupWrapper isExpanded={isExpanded}>
        <StyledPopupItem>{currentUser.email}</StyledPopupItem>
        <StyledPopupCart>
          <Paragraph>Your cart</Paragraph>
          <NotificationCount isVisible value={cart.length} />
        </StyledPopupCart>
        <StyledPopupItem>
          <Button onClickFn={logOut}>Logout</Button>
        </StyledPopupItem>
      </StyledPopupWrapper>
    </StyledUserMenu>
  );
};

export default UserMenu;
