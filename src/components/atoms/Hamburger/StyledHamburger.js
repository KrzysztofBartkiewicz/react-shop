import styled, { css } from 'styled-components';

export const StyledHamburger = styled.button`
  padding: 1rem;
  display: inline-block;
  background-color: transparent;
  border: none;
`;

export const StyledHamburgerBox = styled.span`
  width: 4rem;
  height: 2.4rem;
  display: inline-block;
  position: relative;
`;

const hamburgerLine = css`
  width: 100%;
  height: 3px;
  border-radius: 4px;
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const StyledHamburgerInner = styled.span`
  ${hamburgerLine}
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::before,
  &::after {
    ${hamburgerLine}
    content: '';
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::before {
    top: -1rem;
  }

  &::after {
    top: 1rem;
  }

  ${({ isHomeRendered, theme }) =>
    isHomeRendered &&
    css`
      &,
      &::before,
      &::after {
        background-color: ${theme.colors.primaryWhite};
      }
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      & {
        background-color: transparent;
      }

      &::before {
        transform: translateY(1rem) rotate(45deg);
      }

      &::after {
        transform: translateY(-1rem) rotate(-45deg);
      }
    `}
`;
