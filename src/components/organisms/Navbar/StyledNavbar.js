import styled, { css } from 'styled-components';
import NotificationCount from '../../atoms/NotificationCount';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.4rem 16rem;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: 10;

  ${({ isHomeRendered, theme }) =>
    isHomeRendered &&
    css`
      background-color: rgba(216, 216, 216, 0.6);
      border: none;
    `}

  ${({ theme }) => theme.mq.tablet} {
    padding: 4.4rem 3.5rem;
  }
`;

export const StyledNavList = styled.ul`
  display: flex;

  ${({ isHomeRendered, theme }) =>
    isHomeRendered &&
    css`
      & a {
        color: ${theme.colors.primaryWhite};
      }
    `}

  ${({ theme }) => theme.mq.mobile} {
    display: none;
  }
`;

export const StyledNavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 7.2rem;
  }
`;

export const StyledNavButtons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const StyledButtonWrapper = styled.div`
  position: relative;
`;

export const StyledNotificationCount = styled(NotificationCount)`
  position: absolute;
  right: -0.8rem;
  bottom: 0rem;
  pointer-events: none;
`;

export const StyledLink = styled(Link)`
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const StyledUserMenuWrapper = styled.div`
  ${({ theme }) => theme.mq.mobile} {
    display: none;
  }
`;
