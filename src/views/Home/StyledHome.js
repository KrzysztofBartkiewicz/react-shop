import styled from 'styled-components';
import bgImage1 from '../../assets/images/bg-image-1.jpg';

export const StyledHome = styled.div``;

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.paddings.view};
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage1}) center / cover no-repeat fixed;
`;
