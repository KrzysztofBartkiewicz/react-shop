import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: ${({ theme, secondary }) =>
    secondary ? `1px solid ${theme.colors.buttons.primaryBg}` : 'none'};
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, secondary }) =>
    secondary
      ? theme.colors.buttons.secondaryBg
      : theme.colors.buttons.primaryBg};
  padding: 15px 30px;
  border-radius: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ icon }) => icon && css``}
`;
