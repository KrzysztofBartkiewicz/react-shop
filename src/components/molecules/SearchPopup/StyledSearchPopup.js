import styled, { css } from 'styled-components';
import Input from '../../atoms/Input/CustomInput';

export const StyledSearchPopup = styled.div`
  position: relative;
`;

export const StyledSearchWrapper = styled.div`
  min-width: 50rem;
  padding: 3rem;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  right: 100%;
  background: ${({ theme }) => theme.colors.primaryWhite};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  transition: opacity 0.1s linear;
  box-shadow: ${({ theme }) => theme.boxShadows.modal};

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledInput = styled(Input)`
  margin-bottom: 3rem;
`;
