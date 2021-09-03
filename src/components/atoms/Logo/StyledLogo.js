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
  color: ${({ theme }) => theme.colors.primaryBlack};
  span {
    color: ${({ theme }) => theme.colors.primaryYellow};
  }

  ${({ whiteIcon, theme }) =>
    whiteIcon &&
    css`
      &,
      span {
        color: ${theme.colors.primaryWhite};
      }
    `}
`;
