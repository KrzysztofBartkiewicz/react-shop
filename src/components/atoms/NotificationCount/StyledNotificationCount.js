import styled from 'styled-components';

export const StyledNotificationCount = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryYellow};
  text-align: center;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
