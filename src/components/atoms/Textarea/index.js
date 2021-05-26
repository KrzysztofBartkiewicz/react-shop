import React from 'react';
import { StyledTextarea } from './StyledTextarea';

const Textarea = ({ type = 'text', onChangeFn, value, placeholder, name }) => {
  return (
    <StyledTextarea
      type={type}
      onChange={onChangeFn}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Textarea;
