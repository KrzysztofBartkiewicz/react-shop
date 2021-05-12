import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ onChangeFn, value, placeholder }) => {
  return (
    <StyledInput
      type="text"
      onChange={onChangeFn}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
