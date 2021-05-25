import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ children, className, size, weight, secondary }) => {
  return (
    <StyledParagraph
      secondary={secondary}
      size={size}
      weight={weight}
      className={className}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
