import styled, { css } from 'styled-components';

export const StyledHamburger = styled.button`
  padding: 1rem;
  background-color: transparent;
  border: none;
  display: none;

  ${({ theme }) => theme.mq.mobile} {
    display: block;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 3.5rem;
  height: 2.4rem;
  display: block;
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
  transition: background-color 0.1s 0.1s ease-in-out;

  &::before,
  &::after {
    ${hamburgerLine}
    content: '';
    transition: transform 0.2s 0.1s ease-in-out;
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
