import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  ${({ listImage }) =>
    listImage &&
    css`
      width: 25rem;
      height: auto;

      ${({ theme }) => theme.mq.tablet} {
        width: 15rem;
      }
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
