import styled from 'styled-components';
import { Form } from 'formik';
import Heading from '../../../atoms/Heading';
import Button from '../../../atoms/Button';
import { Link } from 'react-router-dom';

export const StyledFormWrapper = styled.div`
  margin-top: 4rem;
  padding: 0 1rem;
`;

export const StyledUserButtonsWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 5.5rem;
  text-align: left;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: repeat(12, minmax(2rem, 12rem));
  grid-template-rows: repeat(8, 6rem);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledButtonsWrapper = styled.div`
  grid-column: 1 / span 5;

  ${({ theme }) => theme.mq.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      margin: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const StyledFormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: -1;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledContinueBtn = styled(Button)`
  margin-right: 3rem;

  ${({ theme }) => theme.mq.mobile} {
    margin-right: 0;
  }
`;

export const StyledLoginLink = styled(Link)`
  margin-right: 2rem;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.paddings.primary};
  border-radius: ${({ theme }) => theme.borderRadiuses.primary};
  color: ${({ theme }) => theme.colors.primaryBlack};
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const StyledSigninLink = styled(StyledLoginLink)`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledSubmitBtn = styled(Button)``;
