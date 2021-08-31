import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Paragraph from '../../../components/atoms/Paragraph';
import Heading from '../../../components/atoms/Heading';
import bgImage1 from '../../../assets/images/bg-image-1.jpg';
import bgImage2 from '../../../assets/images/bg-image-2.jpg';
import bgImage3 from '../../../assets/images/bg-image-3.jpg';
import bgImage4 from '../../../assets/images/bg-image-4.jpg';

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.paddings.view};
  height: 100vh;
  ${({ background }) => {
    const bgsArr = [bgImage1, bgImage2, bgImage3, bgImage4];
    return css`
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${bgsArr[background]}) center / cover no-repeat;
    `;
  }}
`;

export const StyledHeadingWrapper = styled.div`
  margin: 24.2rem 0 0 36.2rem;
  color: ${({ theme }) => theme.colors.primaryWhite};

  ${({ theme }) => theme.mq.tablet} {
    margin: 24.2rem 0 0 3.5rem;
  }
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
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledInfoWrapper = styled.div`
  padding: 3rem;
  max-width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 0 9rem 0 0;
  background: ${({ theme }) => theme.colors.primaryWhite};
  position: absolute;
  bottom: 0;
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

export const StyledButtonsWrapper = styled.div`
  padding-left: 5.8rem;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;

  button:first-child {
    margin-right: 1rem;
  }
`;
