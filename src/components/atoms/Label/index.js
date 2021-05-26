import React from 'react';
import { StyledLabel } from './StyledLabel';

const Label = ({ htmlFor, children, secondary, className }) => {
  return (
    <StyledLabel secondary={secondary} htmlFor={htmlFor} className={className}>
      {children}
    </StyledLabel>
  );
};

export default Label;
