import styled, { css } from 'styled-components';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import AmountSelector from '../AmountSelector';

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
      width: 5rem;
      height: 5rem;
    `}
`;

export const StyledName = styled(Paragraph)``;

export const StyledCategory = styled(Paragraph)`
  ${({ basic }) =>
    basic &&
    css`
      display: none;
    `}
`;
export const StyledAmountSelector = styled(AmountSelector)`
  ${({ basic }) =>
    basic &&
    css`
      display: none;
    `}
`;
export const StyledTotalPrice = styled(Paragraph)``;

export const StyledButton = styled(Button)`
  ${({ basic }) =>
    basic &&
    css`
      display: none;
    `}
`;
