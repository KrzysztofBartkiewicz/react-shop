import React from 'react';
import { StyledButton } from './StyledButton';

const Button = ({
  children,
  type = 'button',
  onClickFn,
  secondary,
  round,
  goBack,
  icon: Icon,
  facebook,
  gmail,
  className,
  isDisabled = false,
  whiteIcon,
  bgIcon,
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClickFn}
      secondary={secondary}
      round={round}
      icon={Icon}
      facebook={facebook}
      gmail={gmail}
      goBack={goBack}
      disabled={isDisabled}
      type={type}
      bgIcon={bgIcon}
    >
      {Icon ? <Icon fill={whiteIcon && 'white'} /> : children}
    </StyledButton>
  );
};

export default Button;
