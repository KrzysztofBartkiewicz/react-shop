import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({ children, onClickFn, secondary, icon }) => {
  return (
    <StyledButton onClick={onClickFn} secondary={secondary} icon={icon}>
      {children}
    </StyledButton>
  );
};

export default Button;
