import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

export const StyledServiceInfo = styled.div`
  max-width: 50rem;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const StyledIconWrapper = styled.div`
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: 1rem;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
