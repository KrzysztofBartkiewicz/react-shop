import styled from 'styled-components';
import AmountInfo from '../../atoms/AmountInfo';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.4rem 16rem;
`;

export const StyledNavList = styled.ul`
  display: flex;
`;

export const StyledNavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 7.2rem;
  }
`;

export const StyledNavButtons = styled.div`
  display: flex;
`;

export const StyledButtonWrapper = styled.div`
  position: relative;
`;

export const StyledAmountInfo = styled(AmountInfo)`
  position: absolute;
  right: 1.2rem;
  bottom: 0;
  pointer-events: none;
`;
