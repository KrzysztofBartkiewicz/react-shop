import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 2.4rem;
  }

  span {
    color: ${({ theme }) => theme.colors.buttons.primaryBg};
  }
`;
