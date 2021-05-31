import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  width: 70vw;
  height: 85vh;
  outline: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 1rem;
    border: 0.3rem solid transparent;
    background-clip: content-box;
  }
`;

export const StyledHeading = styled(Heading)`
  padding-left: 2rem;
  margin: 3rem 0;
`;

export const StyledCartHead = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 2rem;
  & > *:first-child {
    justify-self: start;
    margin-left: 6rem;
  }
`;

export const StyledSummaryWrapper = styled.div`
  padding: 2rem 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-right: 3rem;
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;
