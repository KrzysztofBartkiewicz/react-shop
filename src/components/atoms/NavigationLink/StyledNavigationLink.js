import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigationLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
`;
