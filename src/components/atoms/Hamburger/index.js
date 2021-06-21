import React from 'react';
import {
  StyledHamburger,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from './StyledHamburger';

const Hamburger = ({ isOpen, onClickFn, isHomeRendered }) => {
  return (
    <StyledHamburger isOpen={isOpen} onClick={onClickFn}>
      <StyledHamburgerBox>
        <StyledHamburgerInner isOpen={isOpen} isHomeRendered={isHomeRendered} />
      </StyledHamburgerBox>
    </StyledHamburger>
  );
};

export default Hamburger;
