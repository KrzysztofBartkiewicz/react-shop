import styled from 'styled-components';
import { iconsTypes } from '../../../helpers/iconsTypes';

export const StyledSelectWrapper = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background-image: url(${iconsTypes.arrowDown});
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
  }
`;

export const StyledSelect = styled.select`
  appearance: none;
  cursor: pointer;
  outline: none;
  padding: ${({ theme }) => theme.paddings.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadiuses.primary};
`;
