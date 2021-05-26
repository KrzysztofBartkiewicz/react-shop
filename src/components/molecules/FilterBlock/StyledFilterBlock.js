import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';

export const StyledFilterWrapper = styled.div`
  padding: 2.4rem 3.1rem;
  margin-bottom: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 0 0 1rem 0.5rem;
  text-transform: uppercase;
`;
