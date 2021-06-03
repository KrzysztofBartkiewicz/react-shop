import styled from 'styled-components';
import Paragraph from '../../../atoms/Paragraph';
import Button from '../../../atoms/Button';

export const StyledLoginForm = styled.div`
  margin-top: 4rem;
  max-width: 44.8rem;
  text-align: center;

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
  align-content: baseline;
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
