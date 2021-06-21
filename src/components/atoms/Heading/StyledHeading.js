import styled, { css } from 'styled-components';

export const StyledHeadingH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl4};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl3};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl2};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH5 = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;

export const StyledHeadingH6 = styled.h6`
  font-size: ${({ theme }) => theme.fontSizes.s};

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.secondary};
    `}
`;
