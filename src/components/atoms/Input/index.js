import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ type = 'text', onChangeFn, value, placeholder }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChangeFn}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
