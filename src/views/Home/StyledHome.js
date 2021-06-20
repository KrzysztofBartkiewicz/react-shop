import styled, { css } from 'styled-components';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import bgImage1 from '../../assets/images/bg-image-1.jpg';
import { Link } from 'react-router-dom';

export const StyledHome = styled.div``;

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.paddings.view};
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgImage1}) center / cover no-repeat fixed;
  position: relative;
`;

export const StyledHeadingWrapper = styled.div`
  margin: 24.2rem 0 0 36.2rem;
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes.xl4};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const StyledLinkIcon = styled.div`
  width: 3.9rem;
  height: 3.9rem;
  margin-right: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLinkParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledHeaderBootomWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
`;

export const StyledInfoWrapper = styled.div`
  padding: 4rem 3rem 4rem 0;
  max-width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 0 9rem 0 0;
  background: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledInfoCard = styled.div`
  margin-right: 7rem;
  display: flex;
  align-items: flex-start;
`;

export const StyledIconWrapper = styled.div`
  margin-right: 2.6rem;
  width: 3.9rem;
  height: 3.9rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2.1rem;
    height: 2.1rem;
  }
`;

export const StyledButtonsWrapper = styled.div``;

export const StyledInfoHeading = styled(Heading)``;