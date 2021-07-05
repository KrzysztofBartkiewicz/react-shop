import styled from 'styled-components';

export const StyledDeliveryWrapper = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-gap: 0.8rem 0.6rem;
  }

  h6 {
    grid-column: span 2;
    margin-bottom: 1.5rem;
  }

  grid-column: 6 / span 3;
  grid-row: 4 / span 3;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 3rem;
  }
`;

export const StyledErrorMessage = styled.div`
  color: red;
`;
