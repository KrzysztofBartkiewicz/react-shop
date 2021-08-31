import React, { useState, useEffect } from 'react';
import { routes } from '../../../helpers/routes';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import {
  StyledHeader,
  StyledHeadingWrapper,
  StyledHeading,
  StyledLink,
  StyledLinkIcon,
  StyledLinkParagraph,
  StyledInfoWrapper,
  StyledInfoCard,
  StyledIconWrapper,
} from './StyledHeader';

const Header = () => {
  const [activeBackgound, setActiveBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => {
        if (prev === 3) {
          return 0;
        }
        return prev + 1;
      });
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <StyledHeader background={activeBackgound}>
      <StyledHeadingWrapper>
        <StyledHeading headingType="h1">
          Make your watch
          <br />
          into a masterpeace
        </StyledHeading>
        <StyledLink to={routes.products}>
          <StyledLinkIcon>
            <iconsTypes.ArrowRightIcon fill="white" />
          </StyledLinkIcon>
          <StyledLinkParagraph>SHOP NOW</StyledLinkParagraph>
        </StyledLink>
      </StyledHeadingWrapper>

      <StyledInfoWrapper>
        <StyledInfoCard>
          <StyledIconWrapper>
            <iconsTypes.Car2Icon />
          </StyledIconWrapper>
          <div>
            <Heading headingType="h6">Free Shipping</Heading>
            <Paragraph size="xs" secondary>
              On purchases over $399
            </Paragraph>
          </div>
        </StyledInfoCard>
        <StyledInfoCard>
          <StyledIconWrapper>
            <iconsTypes.HappyIcon />
          </StyledIconWrapper>
          <div>
            <Heading headingType="h6">99% Satisfied Customers</Heading>
            <Paragraph size="xs" secondary>
              Our clients' opinions
              <br />
              speak for themselves
            </Paragraph>
          </div>
        </StyledInfoCard>
        <StyledInfoCard>
          <StyledIconWrapper>
            <iconsTypes.GuaranteeIcon />
          </StyledIconWrapper>
          <div>
            <Heading headingType="h6">Originality Guaranteed</Heading>
            <Paragraph size="xs" secondary>
              2 years warranty for each
              <br />
              product from our store
            </Paragraph>
          </div>
        </StyledInfoCard>
      </StyledInfoWrapper>
      {/* <StyledButtonsWrapper>
            <Button square isDisabled={true} icon={iconsTypes.ArrowLeftIcon} />
            <Button square icon={iconsTypes.ArrowRightIcon} />
          </StyledButtonsWrapper> */}
    </StyledHeader>
  );
};

export default Header;
