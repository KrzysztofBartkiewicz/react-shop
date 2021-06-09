import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  ${({ listImage }) =>
    listImage &&
    css`
      width: 250px;
      height: auto;
    `}

  ${({ cartImg }) =>
    cartImg &&
    css`
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      object-fit: cover;
    `}
`;
