import React, { useState } from 'react';
import { routes } from '../../../helpers/routes';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
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
  StyledButtonsWrapper,
} from './StyledHeader';

const Header = () => {
  const [activeBackgound, setActiveBackground] = useState(0);

  const handleChangeBackground = (value) => {
    const newValue = value + activeBackgound;
    if (newValue < 0 || newValue > 3) {
      return;
    }
    setActiveBackground(newValue);
  };

  const renderHeadingWrapper = () => (
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
  );

  const renderInfoWrapper = () => (
    <StyledInfoWrapper>
      <StyledInfoCard>
        <StyledIconWrapper>
          <iconsTypes.Car2Icon />
        </StyledIconWrapper>
        <div>
          <Heading headingType="h6">Free Shipping</Heading>
          <Paragraph size="xxs" secondary>
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
          <Paragraph size="xxs" secondary>
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
          <Paragraph size="xxs" secondary>
            2 years warranty for each
            <br />
            product from our store
          </Paragraph>
        </div>
      </StyledInfoCard>
    </StyledInfoWrapper>
  );

  const renderButtonsWrapper = () => (
    <StyledButtonsWrapper>
      <Button
        onClickFn={() => handleChangeBackground(-1)}
        square
        isDisabled={activeBackgound === 0}
        icon={iconsTypes.ArrowLeftIcon}
      />
      <Button
        onClickFn={() => handleChangeBackground(1)}
        square
        isDisabled={activeBackgound === 3}
        icon={iconsTypes.ArrowRightIcon}
      />
    </StyledButtonsWrapper>
  );

  return (
    <StyledHeader background={activeBackgound}>
      {renderHeadingWrapper()}
      {renderInfoWrapper()}
      {renderButtonsWrapper()}
    </StyledHeader>
  );
};

export default Header;
