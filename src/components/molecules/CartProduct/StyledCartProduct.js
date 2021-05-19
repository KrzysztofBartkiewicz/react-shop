import styled from 'styled-components';
import Heading from '../../atoms/Heading';

export const StyledCartProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledProductName = styled(Heading)`
  justify-self: start;
  margin-left: 1rem;
`;
