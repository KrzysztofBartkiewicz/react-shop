import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({
  children,
  onClickFn,
  secondary,
  round,
  nav,
  menu,
  icon,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClickFn}
      secondary={secondary}
      round={round}
      nav={nav}
      menu={menu}
      icon={icon}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
