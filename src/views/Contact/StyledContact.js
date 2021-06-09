import styled from 'styled-components';

export const StyledContact = styled.div`
  padding: ${({ theme }) => theme.paddings.view};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
