import styled from 'styled-components';
import FormInput from '../../../../../molecules/FormInput';

export const StyledShippingInfoWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 1rem;
  align-items: start;

  & > h6 {
    grid-column: span 2;
    margin-bottom: 1.5rem;
  }
  grid-column: 1 / span 4;
`;

export const StyledFormInput = styled(FormInput)`
  margin: 0 0 2rem 0;
`;
