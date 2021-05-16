import styled from 'styled-components';

export const StyledList = styled.ul`
  max-width: 120rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const StyledListItem = styled.li`
  align-self: end;
`;
