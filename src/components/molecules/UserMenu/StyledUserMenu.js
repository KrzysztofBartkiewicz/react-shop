import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledUserName = styled(Paragraph)`
  margin-right: 1rem;

  ${({ white }) =>
    white &&
    css`
      color: white;
    `}
`;

export const StyledPopupButton = styled(Button)`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const StyledPopupWrapper = styled.div`
  display: none;
  position: absolute;
  top: 5rem;
  right: 0;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.s};
  background: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: ${({ theme }) => theme.boxShadows.modal};

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      display: block;
    `}
`;

export const StyledPopupCart = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPopupItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &:first-child {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
