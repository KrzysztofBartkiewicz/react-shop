import styled, { css } from 'styled-components';

export const StyledAmountInfo = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  text-align: center;
  display: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: block;
    `}
`;
