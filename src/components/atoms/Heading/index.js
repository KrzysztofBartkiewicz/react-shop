import React from 'react';
import {
  StyledHeadingH1,
  StyledHeadingH2,
  StyledHeadingH3,
  StyledHeadingH4,
  StyledHeadingH5,
  StyledHeadingH6,
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
      case 'h4':
        return (
          <StyledHeadingH4 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH4>
        );
      case 'h5':
        return (
          <StyledHeadingH5 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH5>
        );
      case 'h6':
        return (
          <StyledHeadingH6 className={className} secondary={secondary}>
            {children}
          </StyledHeadingH6>
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
