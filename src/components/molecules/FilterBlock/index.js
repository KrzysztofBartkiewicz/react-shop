import React from 'react';
import { StyledFilterWrapper, StyledParagraph } from './StyledFilterBlock';

const index = ({ headingText, children }) => {
  return (
    <StyledFilterWrapper>
      <StyledParagraph weight="bold" size="xxs">
        {headingText}
      </StyledParagraph>
      {children}
    </StyledFilterWrapper>
  );
};

export default index;
