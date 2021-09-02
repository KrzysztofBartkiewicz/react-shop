import styled from 'styled-components';
import Heading from '../../components/atoms/Heading';

export const StyledHome = styled.div``;

export const StyledSelected = styled.div`
  margin: 20rem 16rem 0 16rem;

  ${({ theme }) => theme.mq.tablet} {
    margin: 2rem;
  }
`;

export const StyledSelectedHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: 8rem;
`;

export const StyledServices = styled.div`
  margin: 20rem 16rem 20rem 16rem;

  ${({ theme }) => theme.mq.tablet} {
    margin: 2rem;
  }
`;

export const StyledServicesHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: 8rem;
`;

export const StyledServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-right: 10rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-right: 0rem;
    }

    & > * {
      margin-bottom: 2rem;
    }
  }
`;
