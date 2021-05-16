import styled from 'styled-components';
import Image from '../../atoms/Image';

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledImgWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;
