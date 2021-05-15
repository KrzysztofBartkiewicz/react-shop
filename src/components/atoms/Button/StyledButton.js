import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 1.5rem 3rem;
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryBlack};
  background-color: ${({ theme }) => theme.colors.buttons.primaryBg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ theme, secondary }) =>
    secondary &&
    css`
      border: 1px solid ${theme.colors.secondary};
      background-color: ${theme.colors.buttons.secondaryBg};
    `}

  ${({ round }) =>
    round &&
    css`
      width: 4.8rem;
      height: 4.8rem;
      padding: 0;
      border-radius: 50%;
    `}

  ${({ nav }) =>
    nav &&
    css`
      width: 2.2rem;
      height: 2.2rem;
      background-color: transparent;
      border-radius: 0;
    `}

  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${icon});
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
