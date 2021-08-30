import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 5rem 16rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-bottom: 2rem;
  }

  & > a {
    margin-bottom: 0.5rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > *:first-child {
      margin-bottom: 0.8rem;
    }
  }
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const StyledAmount = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export const StyledSocials = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
`;
