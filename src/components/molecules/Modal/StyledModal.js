import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Heading from '../../atoms/Heading';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  width: 40vw;
  height: 85vh;
  outline: none;
  overflow-y: auto;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`;
