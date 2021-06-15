import styled from 'styled-components';
import Button from '../../atoms/Button';

export const StyledProductWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5rem;
  z-index: 1;
`;
