import styled, { css } from 'styled-components';
import heartIcon from '../../../assets/icons/heart.svg';

export const StyledButton = styled.button`
  border: ${({ theme, secondary }) =>
    secondary ? `1px solid ${theme.colors.buttons.primaryBg}` : 'none'};
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, secondary }) =>
    secondary
      ? theme.colors.buttons.secondaryBg
      : theme.colors.buttons.primaryBg};
  padding: 1.5rem 3rem;
  border-radius: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ icon }) =>
    icon &&
    css`
      width: 5rem;
      height: 5rem;
      padding: 0;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      background-image: url(${heartIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-color: ${({ theme }) => theme.colors.buttons.secondaryBg};
    `}
`;
