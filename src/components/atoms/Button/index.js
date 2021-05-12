import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, onClickFn, secondary }) => {
  return (
    <StyledButton onClick={onClickFn} secondary={secondary}>
      {children}
    </StyledButton>
  );
};

export default Button;
