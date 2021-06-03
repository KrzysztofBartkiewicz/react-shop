import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({
  children,
  type = 'button',
  onClickFn,
  secondary,
  round,
  nav,
  menu,
  goBack,
  icon,
  className,
  isDisabled = false,
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
      goBack={goBack}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
