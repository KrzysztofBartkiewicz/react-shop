import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';
import List from '../../components/molecules/List';
import FIlterMenu from '../../components/organisms/FilterMenu';

export const StyledProducts = styled.div`
  padding: ${({ theme }) => theme.paddings.view};
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-template-rows: min-content minmax(30rem, auto) min-content;
`;

export const StyledProductsHeading = styled(Heading)`
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1;
`;

export const StyledFilterMenu = styled(FIlterMenu)`
  grid-column: 1 / span 3;
  grid-row: 2;
`;

export const StyledList = styled(List)`
  grid-column: 4 / -1;
  grid-row: 2 / -1;
`;
