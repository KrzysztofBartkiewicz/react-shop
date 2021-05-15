import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.4rem 16rem;
`;

export const StyledNavList = styled.ul`
  display: flex;
`;

export const StyledNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 7.2rem;
  }
`;
