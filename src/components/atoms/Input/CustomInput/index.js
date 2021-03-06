import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({
  id,
  type = 'text',
  onChangeFn,
  value,
  placeholder,
  name,
  checked,
  className,
  disabled,
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      onChange={onChangeFn}
      value={value}
      placeholder={placeholder}
      name={name}
      checked={checked}
      className={className}
      disabled={disabled}
    />
  );
};

export default Input;
