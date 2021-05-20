import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';
import List from '../../components/molecules/List';
import FIlterMenu from '../../components/organisms/FilterMenu';

export const StyledProducts = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
`;

export const StyledProductsHeading = styled(Heading)`
  grid-column: 1 / span 5;
  margin-bottom: 2rem;
  text-align: center;
`;

export const StyledFilterMenu = styled(FIlterMenu)`
  grid-column: 1 / span 1;
`;

export const StyledList = styled(List)`
  grid-column: 2 / span 4;
`;
