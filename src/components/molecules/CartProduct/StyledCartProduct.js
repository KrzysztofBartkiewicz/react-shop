import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph';

export const StyledCartProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledParagraph = styled(Paragraph)`
  justify-self: start;
  margin-left: 1rem;
`;
