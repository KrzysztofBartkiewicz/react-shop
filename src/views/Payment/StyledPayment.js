import styled from 'styled-components';

export const StyledPayment = styled.div`
  padding: ${({ theme }) => theme.paddings.view};
  height: 100vh;

  & > h5 {
    margin-left: 3rem;
  }

  ${({ theme }) => theme.mq.mobile} {
    margin-bottom: 15rem;
  }
`;

export const StyledSummaryWrapper = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 4rem;

  ${({ theme }) => theme.mq.mobile} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledPaymentWrapper = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
`;
