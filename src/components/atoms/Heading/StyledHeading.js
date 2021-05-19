import styled, { css } from 'styled-components';

export const StyledHeadingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.big};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;
