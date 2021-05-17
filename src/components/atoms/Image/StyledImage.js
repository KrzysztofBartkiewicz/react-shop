import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  width: 250px;

  ${({ cartImg }) =>
    cartImg &&
    css`
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      object-fit: cover;
    `}
`;
