import styled, { css } from 'styled-components';
import NotificationCount from '../../atoms/NotificationCount';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.4rem 16rem;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: 10;

  ${({ isHomeRendered }) =>
    isHomeRendered &&
    css`
      background-color: transparent;
      border: none;
    `}
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
`;

export const StyledNavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 7.2rem;
  }
`;

export const StyledNavButtons = styled.div`
  display: flex;
  align-items: flex-start;

  & > * {
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