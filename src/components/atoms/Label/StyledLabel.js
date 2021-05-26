import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.tertiary : theme.colors.primaryBlack};
`;
