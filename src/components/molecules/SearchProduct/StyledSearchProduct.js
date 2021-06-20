import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSearchProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledLinkInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: block;
    flex-grow: 1;
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: block;
`;
