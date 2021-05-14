import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  width: 40vw;
  height: 85vh;
  outline: none;
  border-radius: 2.5rem;
  overflow-y: auto;
`;
