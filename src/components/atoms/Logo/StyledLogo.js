import styled, { css } from 'styled-components';
import Heading from '../Heading';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 2.4rem;
  }
`;

export const StyledHeading = styled(Heading)`
  span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }

  ${({ isHomeRendered }) =>
    isHomeRendered &&
    css`
      &,
      & span {
        color: ${({ theme }) => theme.colors.primaryWhite};
      }
    `}
`;
