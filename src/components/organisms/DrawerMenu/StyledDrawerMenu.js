import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDrawerMenu = styled.div`
  min-width: 100vw;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 101%;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: 20;
  transform: translateX(-102%);
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const StyledLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 3rem;
  display: block;
  color: ${({ theme }) => theme.colors.primaryBlack};
`;
