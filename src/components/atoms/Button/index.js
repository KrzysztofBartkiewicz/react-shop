import React from 'react';
import { StyledButton } from './StyledButton';

const Button = React.forwardRef(
  (
    {
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
      square,
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
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
        square={square}
      >
        {Icon ? <Icon fill={whiteIcon ? 'white' : ''} /> : children}
      </StyledButton>
    );
  }
);
export default Button;
