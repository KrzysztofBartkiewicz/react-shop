import styled from 'styled-components';
import Input from '../../atoms/Input/CustomInput';

export const StyledSearchWrapper = styled.div`
  min-width: 50rem;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.primaryWhite};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadows.modal};
`;

export const StyledInput = styled(Input)`
  margin-bottom: 3rem;
`;
