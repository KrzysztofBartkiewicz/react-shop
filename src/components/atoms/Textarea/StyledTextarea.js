import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  resize: none;
  padding: 0.5rem;
  width: 100%;
  min-height: 10rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  outline: none;
`;
