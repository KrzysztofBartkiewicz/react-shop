import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
} from './StyledHeading';

const Heading = ({ headingType, children }) => {
  const renderHeading = (headingType) => {
    switch (headingType) {
      case 'h1':
        return <StyledHeadingH1>{children}</StyledHeadingH1>;
      case 'h2':
        return <StyledHeadingH2>{children}</StyledHeadingH2>;

      default:
        return <StyledHeadingH3>{children}</StyledHeadingH3>;
    }
  };

  return <>{renderHeading(headingType)}</>;
};

export default Heading;
