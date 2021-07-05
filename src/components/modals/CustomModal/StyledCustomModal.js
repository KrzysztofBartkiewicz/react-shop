import styled, { css } from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 500;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;
