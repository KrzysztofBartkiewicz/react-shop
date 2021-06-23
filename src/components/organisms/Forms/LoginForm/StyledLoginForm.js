import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paragraph from '../../../atoms/Paragraph';
import Button from '../../../atoms/Button';

export const StyledLoginForm = styled.div`
  margin-top: 4rem;
  max-width: 44.8rem;
  text-align: center;
  padding: 0 1rem;
  padding-bottom: 10rem;
`;

export const StyledParagraph = styled(Paragraph)`
  margin: 5rem 0;
  line-height: 2;
`;

export const StyledInnerWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButtonsWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSubmitBtn = styled(Button)`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const StyledSignupLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primaryBlack};

  span {
    margin-left: 2rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
