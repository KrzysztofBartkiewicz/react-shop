import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigationLink = styled(Link)`
  font-size: ${({ theme, size }) =>
    size ? theme.fontSizes[size] : theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.fontWeights[weight] : theme.fontWeights.bold};
  text-decoration: none;
`;
