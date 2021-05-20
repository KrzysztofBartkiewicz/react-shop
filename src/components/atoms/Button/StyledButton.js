import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.paddings.primary};
  border-radius: ${({ theme }) => theme.borderRadiuses.primary};
  color: ${({ theme }) => theme.colors.primaryBlack};
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ theme, secondary }) =>
    secondary &&
    css`
      border: 1px solid ${theme.colors.secondary};
      background-color: ${theme.colors.primaryWhite};
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
      background-size: 2rem 2rem;
      border-radius: 0;
    `}

  ${({ menu }) =>
    menu &&
    css`
      width: 1rem;
      height: 1rem;
      padding: 1rem;
      background-color: transparent;
      border-radius: 0;
      background-size: 1.5rem 1.5rem;
    `}

  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${icon});
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
