import styled from 'styled-components';
import { Form } from 'formik';
import Heading from '../../../atoms/Heading';
import Button from '../../../atoms/Button';

export const StyledFormWrapper = styled.div`
  margin-top: 4rem;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 5.5rem;
  text-align: left;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(12, minmax(2rem, 12rem));
  grid-template-rows: repeat(8, 6rem);
`;

export const StyledButtonsWrapper = styled.div`
  grid-column: 1 / span 5;
`;

export const StyledFormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: -1;
`;

export const StyledContinueBtn = styled(Button)`
  margin-right: 3rem;
`;

export const StyledSubmitBtn = styled(Button)``;

export const StyledLoginBtn = styled(Button)`
  margin-right: 2rem;
`;
