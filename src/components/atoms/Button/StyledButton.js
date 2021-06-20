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

  ${({ round }) =>
    round &&
    css`
      width: 4.8rem;
      height: 4.8rem;
      padding: 0;
      border-radius: 50%;
    `}

  ${({ icon }) =>
    icon &&
    css`
      padding: 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    `}

  ${({ icon, round, theme }) =>
    icon &&
    round &&
    css`
      background: ${theme.colors.primaryYellow};
      border: none;
    `}

    ${({ theme, secondary }) =>
    secondary &&
    css`
      border: 1px solid ${theme.colors.secondary};
      background-color: ${theme.colors.primaryWhite};
    `}

  ${({ goBack }) =>
    goBack &&
    css`
      padding: 0;
      background: transparent;
      padding: 1rem 3rem;
    `}

  ${({ facebook, theme }) =>
    facebook &&
    css`
      padding: 1.8rem 5.8rem 1.8rem 9.8rem;
      background: url(${iconsTypes.facebook}) 30% no-repeat
        ${theme.colors.facebook};
      color: ${theme.colors.primaryWhite};
    `}

  ${({ gmail, theme }) =>
    gmail &&
    css`
      padding: 1.8rem 5.8rem 1.8rem 9.8rem;
      background: url(${iconsTypes.gmail}) 30% no-repeat
        ${theme.colors.primaryWhite};
      color: ${theme.colors.primaryBlack};
      border: 1px solid ${theme.colors.gmail};
    `}

  ${({ bgIcon }) =>
    bgIcon &&
    css`
      background-color: transparent;
    `}

  ${({ square, disabled }) =>
    square &&
    css`
      width: 7.2rem;
      height: 7.2rem;
      background: rgba(255, 255, 255, ${disabled ? '0.1' : '1'});
      border-radius: 0;
      cursor: ${disabled ? 'default' : 'pointer'};

      svg {
        fill: ${disabled && 'white'};
      }
    `}
`;
