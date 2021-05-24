import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${({ theme }) => theme.paddings.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.teriary};
  outline: none;
`;
