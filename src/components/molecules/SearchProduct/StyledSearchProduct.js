import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph';

export const StyledSearchProduct = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  text-align: center;
`;

export const StyledName = styled(Paragraph)`
  margin-left: 3rem;
`;
