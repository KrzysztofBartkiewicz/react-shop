import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
} from './StyledHeading';

const Heading = ({ headingType, children, className, secondary }) => {
  const renderHeading = () => {
    switch (headingType) {
      case 'h1':
        return (
          <StyledHeadingH1 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH1>
        );
      case 'h2':
        return (
          <StyledHeadingH2 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH2>
        );

      default:
        return (
          <StyledHeadingH3 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH3>
        );
    }
  };

  return <>{renderHeading()}</>;
};

export default Heading;
