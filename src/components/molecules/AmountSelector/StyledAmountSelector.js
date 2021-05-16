import styled from 'styled-components';

export const StyledAmountSelector = styled.div`
  display: flex;
  align-items: center;
  width: 13rem;
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;
