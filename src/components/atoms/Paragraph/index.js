import React from 'react';
import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ children, className }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
