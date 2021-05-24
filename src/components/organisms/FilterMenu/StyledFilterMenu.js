import styled from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledFilterMenu = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const StyledMenuHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`;

export const StyledHeading = styled(Heading)`
  margin: 2rem 0 1rem 0.5rem;
`;
