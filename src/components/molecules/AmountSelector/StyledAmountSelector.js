import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';

export const StyledAmountSelector = styled.div`
  width: 15rem;
  padding: 0.8rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadiuses.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledParagraph = styled(Paragraph)`
  flex-basis: 2rem;
  text-align: center;
`;
