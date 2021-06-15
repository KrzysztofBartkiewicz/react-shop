import styled, { css } from 'styled-components';
import Image from '../../atoms/Image';

export const StyledCartProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-bottom: 1rem;

  ${({ basic }) =>
    basic &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const StyledImage = styled(Image)`
  ${({ basic }) =>
    basic &&
    css`
      width: 4rem;
      height: 4rem;
    `}
`;
