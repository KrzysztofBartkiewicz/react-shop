import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-weight: ${({ theme, weight }) =>
    weight === 'light'
      ? theme.fontWeights.light
      : weight === 'semiBold'
      ? theme.fontWeights.semiBold
      : weight === 'bold'
      ? theme.fontWeights.bold
      : weight === 'extraBold'
      ? theme.fontWeights.extraBold
      : theme.fontWeights.regular};
  font-size: ${({ theme, size }) =>
    size === 'xs'
      ? theme.fontSizes.xs
      : size === 'xxs'
      ? theme.fontSizes.xxs
      : theme.fontSizes.s};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.secondary : theme.colors.primaryBlack};
`;
