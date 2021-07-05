import styled from 'styled-components';

export const StyledPaymentWrapper = styled.div`
  margin-bottom: 4.7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, min-content);
  grid-gap: 0.8rem 0.6rem;

  & > h6 {
    grid-column: span 3;
    margin-bottom: 1.5rem;
  }

  grid-column: 6 / span 3;
  grid-row: 1 / span 3;
`;

export const StyledErrorMessage = styled.div`
  color: red;
`;
