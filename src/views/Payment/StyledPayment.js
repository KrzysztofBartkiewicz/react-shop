import styled from 'styled-components';

export const StyledPayment = styled.div`
  padding: ${({ theme }) => theme.paddings.view};
  height: 100vh;

  & > h5 {
    margin-left: 3rem;
  }
`;

export const StyledSummaryWrapper = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 4rem;
`;

export const StyledAddress = styled.div``;

export const StyledDelivery = styled.div`
  justify-self: start;
`;

export const StyledCart = styled.div``;

export const StyledPaymentWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
`;
