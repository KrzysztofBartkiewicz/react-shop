import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';

export const StyledHome = styled.div``;

export const StyledSelected = styled.div`
  margin: 20rem auto 0 auto;
  max-width: 80vw;
`;

export const StyledSelectedHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: 8rem;
`;
