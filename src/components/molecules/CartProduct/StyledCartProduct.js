import styled, { css } from 'styled-components';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import AmountSelector from '../AmountSelector';
import Button from '../../atoms/Button';

export const StyledCartProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 1fr;
  grid-row-gap: 1rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 3rem;
  }

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

export const StyledName = styled(Paragraph)``;

export const StyledAmountSelector = styled(AmountSelector)`
  ${({ theme }) => theme.mq.mobile} {
    grid-row: 2;
  }
`;

export const StyledCategory = styled(Paragraph)`
  ${({ theme }) => theme.mq.mobile} {
    display: none;
  }
`;

export const StyledPrice = styled(Paragraph)`
  ${({ theme }) => theme.mq.mobile} {
    grid-column: 5;
    grid-row: 2;
  }
`;

export const StyledRemoveButton = styled(Button)`
  ${({ theme }) => theme.mq.mobile} {
    grid-column: 5;
  }
`;
