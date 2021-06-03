import styled, { css } from 'styled-components';
import { iconsTypes } from '../../../helpers/iconsTypes';

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

  ${({ goBack, icon }) =>
    goBack &&
    css`
      padding: 0;
      background: url(${icon}) left no-repeat;
      padding: 1rem 3rem;
    `}

  ${({ facebook, theme }) =>
    facebook &&
    css`
      padding: 1.8rem 5.8rem 1.8rem 7.8rem;
      background: url(${iconsTypes.facebook}) 30% no-repeat
        ${theme.colors.facebook};
      color: ${theme.colors.primaryWhite};
    `}

  ${({ gmail, theme }) =>
    gmail &&
    css`
      padding: 1.8rem 5.8rem 1.8rem 7.8rem;
      background: url(${iconsTypes.gmail}) 30% no-repeat
        ${theme.colors.primaryWhite};
      color: ${theme.colors.primaryBlack};
      border: 1px solid ${theme.colors.gmail};
    `}
`;
