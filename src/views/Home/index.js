import React, { useContext, useEffect } from 'react';
import { routes } from '../../helpers/routes';
import RootContext from '../../context/RootContext';
import Paragraph from '../../components/atoms/Paragraph';
import { iconsTypes } from '../../helpers/iconsTypes';
import {
  StyledHeader,
  StyledHeaderBootomWrapper,
  StyledHeading,
  StyledHome,
  StyledInfoCard,
  StyledInfoHeading,
  StyledInfoWrapper,
  StyledIconWrapper,
  StyledHeadingWrapper,
  StyledLink,
  StyledLinkIcon,
  StyledLinkParagraph,
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
              <iconsTypes.ArrowRightIcon />
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
                <StyledInfoHeading headingType="h6">
                  Free Shipping
                </StyledInfoHeading>
                <Paragraph secondary>On purchases over $399</Paragraph>
              </div>
            </StyledInfoCard>
            <StyledInfoCard>
              <StyledIconWrapper>
                <iconsTypes.HappyIcon />
              </StyledIconWrapper>
              <div>
                <StyledInfoHeading headingType="h6">
                  99% Satisfied Customers
                </StyledInfoHeading>
                <Paragraph secondary>
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
                <StyledInfoHeading headingType="h6">
                  Originality Guaranteed
                </StyledInfoHeading>
                <Paragraph secondary>
                  2 years warranty for each
                  <br />
                  product from our store
                </Paragraph>
              </div>
            </StyledInfoCard>
          </StyledInfoWrapper>
        </StyledHeaderBootomWrapper>
      </StyledHeader>
    </StyledHome>
  );
};

export default Home;
