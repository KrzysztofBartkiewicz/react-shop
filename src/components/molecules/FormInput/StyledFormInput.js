import styled, { css } from 'styled-components';
import Input from '../../atoms/Input/CustomInput';
import Label from '../../atoms/Label';

export const StyledFormInput = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
`;

export const StyledLabel = styled(Label)`
  position: absolute;
  top: 1.2rem;
  left: 3rem;
  transition: transform 0.3s ease;

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      position: static;
    `}
`;

export const StyledInput = styled(Input)`
  width: 100%;

  ${({ value, type }) =>
    value.length !== 0 &&
    type !== 'checkbox' &&
    css`
      & ~ ${StyledLabel} {
        transform: translate(-1rem, -3.3rem) scale(0.9);
      }
    `}

  ${({ type }) =>
    type !== 'checkbox' &&
    css`
      &:focus ~ ${StyledLabel} {
        transform: translate(-1rem, -3.3rem) scale(0.9);
      }
    `}

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      width: auto;
      order: -1;
    `}
`;

export const StyledErrorMsg = styled.div`
  height: 1.5rem;
  margin: 0.5rem 0 0 1rem;
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.xxs};

  ${({ type }) =>
    type === 'checkbox' &&
    css`
      position: absolute;
      left: 0rem;
      bottom: -2rem;
    `}
`;
