import styled from 'styled-components';
import Heading from '../../../../../atoms/Heading';
import Paragraph from '../../../../../atoms/Paragraph';

export const StyledCartWrapper = styled.div`
  grid-column: 10 / -1;
  grid-row: 1 / span 7;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 1.5rem;
`;

export const StyledCart = styled.div`
  padding: 0 1rem;
  max-height: 23.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 1rem;
    border: 0.3rem solid transparent;
    background-clip: content-box;
  }
`;

export const StyledTotalCost = styled(Paragraph)`
  padding: 1.3rem 3.6rem;
  background-color: #f1f1f1;
  border-radius: 2rem;
  max-width: max-content;
  display: block;
  margin: 3rem auto;
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

export const StyledFreeShippingInfoWrapper = styled.div`
  width: 19rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    height: max-content;
    margin-right: 2rem;
  }
`;

export const StyledFreeShippingInfo = styled(Paragraph)`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  & span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const StyledEmptyInfo = styled(Heading)`
  text-align: center;
  margin-top: 10rem;
`;
