import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;