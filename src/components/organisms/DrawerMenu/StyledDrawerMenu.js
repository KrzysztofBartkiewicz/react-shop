import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDrawerMenu = styled.div`
  min-width: 100vw;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 101%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: 20;
  transform: translateX(-102%);
  transition: transform 0.3s ease-in-out;
  display: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}

  ${({ theme }) => theme.mq.mobile} {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 3rem;
  display: block;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;

export const StyledUserWrapper = styled.div`
  margin-top: 6rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

export const StyledCartInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 5rem;
  }
`;

export const StyledLoginLink = styled(Link)`
  ${({ theme }) => theme.mixins.buttons.primary}
  margin-right: 3rem;
`;

export const StyledSigninLink = styled(StyledLoginLink)`
  ${({ theme }) => theme.mixins.buttons.secondary}
`;
