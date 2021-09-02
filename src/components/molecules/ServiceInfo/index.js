import React from 'react';
import {
  StyledIconWrapper,
  StyledServiceInfo,
  StyledHeading,
  StyledParagraph,
} from './StyledServiceInfo';

const ServiceInfo = ({ icon: Icon, heading, children }) => {
  return (
    <StyledServiceInfo>
      <StyledIconWrapper>
        <Icon />
      </StyledIconWrapper>
      <StyledHeading>{heading}</StyledHeading>
      <StyledParagraph>{children}</StyledParagraph>
    </StyledServiceInfo>
  );
};

export default ServiceInfo;
