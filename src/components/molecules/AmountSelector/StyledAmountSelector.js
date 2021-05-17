import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';

export const StyledAmountSelector = styled.div`
  width: 15rem;
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
`;

export const StyledParagraph = styled(Paragraph)`
  width: 2rem;
  text-align: center;
`;
