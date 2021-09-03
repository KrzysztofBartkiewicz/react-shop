import React from 'react';
import {
  StyledHamburger,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from './StyledHamburger';

const Hamburger = ({ isOpen, onClickFn, whiteIcon }) => {
  return (
    <StyledHamburger isOpen={isOpen} onClick={onClickFn}>
      <StyledHamburgerBox>
        <StyledHamburgerInner isOpen={isOpen} whiteIcon={whiteIcon} />
      </StyledHamburgerBox>
    </StyledHamburger>
  );
};

export default Hamburger;
