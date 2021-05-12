import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 1.8rem 4rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.tertiary};
`;
