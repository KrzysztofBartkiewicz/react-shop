import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import Image from '../../components/atoms/Image';
import Label from '../../components/atoms/Label';

export const StyledSingleProduct = styled.div`
  padding: ${({ theme }) => theme.paddings.view};
  margin: 0 auto;
  max-width: 80vw;
  display: flex;
  justify-content: space-around;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }
`;

export const StyledImage = styled(Image)`
  ${({ theme }) => theme.mq.tablet} {
    max-width: 100%;
  }
`;

export const StyledImageWrapper = styled.div`
  margin-right: 10rem;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0;
  }
`;

export const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleName = styled(Heading)``;

export const StyledCategory = styled(Paragraph)``;

export const StyledPrice = styled(Heading)``;

export const StyledDescription = styled(Paragraph)``;

export const StyledLabel = styled(Label)`
  margin-bottom: 0.5rem;
`;

export const StyledInnerWrapper = styled.div`
  margin-top: 1.5rem;

  &:last-child {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > *:first-child {
    margin-right: 3rem;
  }
`;
