import styled from 'styled-components';
import Button from '../../atoms/Button';

export const StyledProduct = styled.div``;

export const StyledImgWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  z-index: 1;
`;
