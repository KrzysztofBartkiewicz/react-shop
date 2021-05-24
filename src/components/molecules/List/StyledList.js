import styled, { css } from 'styled-components';
import { listTypes } from '../../../helpers/listTypes';

export const StyledList = styled.ul`
  max-width: 140rem;

  ${({ listType }) =>
    listType === listTypes.productsList &&
    css`
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    `}
`;

export const StyledListItem = styled.li`
  ${({ listType }) =>
    listType === listTypes.productsList &&
    css`
      padding: 0.5rem;
      display: flex;
      align-items: flex-end;
    `}
`;
