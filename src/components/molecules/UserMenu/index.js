import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import RootContext from '../../../context/RootContext';
import Button from '../../atoms/Button';
import Paragraph from '../../atoms/Paragraph';
import NotificationCount from '../../atoms/NotificationCount';
import useGlobalClickCoords from '../../../hooks/useGlobalClickCoords';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { isClickOutside } from '../../../utils/clickDetection';
import {
  StyledUserMenu,
  StyledUserName,
  StyledPopupButton,
  StyledPopupWrapper,
  StyledPopupItem,
  StyledPopupCart,
} from './StyledUserMenu';

const UserMenu = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const { cart, isHomeRendered } = useContext(RootContext);

  const { x, y } = useGlobalClickCoords();

  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (
      isClickOutside(x, y, popupRef.current) &&
      isClickOutside(x, y, buttonRef.current)
    ) {
      setIsExpanded(false);
    }
  }, [x, y]);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <StyledUserMenu>
      <StyledUserName isHomeRendered={isHomeRendered}>
        {currentUser.firstName}
      </StyledUserName>
      <StyledPopupButton
        ref={buttonRef}
        whiteIcon={isHomeRendered}
        icon={isExpanded ? iconsTypes.ArrowUpIcon : iconsTypes.ArrowDownIcon}
        onClickFn={handleExpand}
      />
      <StyledPopupWrapper ref={popupRef} isExpanded={isExpanded}>
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
