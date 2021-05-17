import styled from 'styled-components';
import Image from '../../atoms/Image';

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledImage = styled(Image)`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
`;
