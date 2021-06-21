import React, { useContext, useEffect } from 'react';
import { routes } from '../../helpers/routes';
import RootContext from '../../context/RootContext';
import Paragraph from '../../components/atoms/Paragraph';
import Heading from '../../components/atoms/Heading';
import Button from '../../components/atoms/Button';
import { iconsTypes } from '../../helpers/iconsTypes';
import {
  StyledHeader,
  StyledHeaderBootomWrapper,
  StyledHeading,
  StyledHome,
  StyledInfoCard,
  StyledInfoWrapper,
  StyledIconWrapper,
  StyledHeadingWrapper,
  StyledLink,
  StyledLinkIcon,
  StyledLinkParagraph,
  StyledButtonsWrapper,
} from './StyledHome';

const Home = () => {
  const { setHomeRenderFlag } = useContext(RootContext);

  useEffect(() => {
    setHomeRenderFlag(true);
    return () => setHomeRenderFlag(false);
  }, []);

  return (
    <StyledHome>
      <StyledHeader>
        <StyledHeadingWrapper>
          <StyledHeading headingType="h1">
            Make your house
            <br />
            into a home
          </StyledHeading>
          <StyledLink to={routes.products}>
            <StyledLinkIcon>
              <iconsTypes.ArrowRightIcon fill="white" />
            </StyledLinkIcon>
            <StyledLinkParagraph>SHOP NOW</StyledLinkParagraph>
          </StyledLink>
        </StyledHeadingWrapper>

        <StyledHeaderBootomWrapper>
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
          <StyledButtonsWrapper>
            <Button square isDisabled={true} icon={iconsTypes.ArrowLeftIcon} />
            <Button square icon={iconsTypes.ArrowRightIcon} />
          </StyledButtonsWrapper>
        </StyledHeaderBootomWrapper>
      </StyledHeader>
    </StyledHome>
  );
};

export default Home;
