import React from 'react';
import {
  StyledFormInput,
  StyledErrorMsg,
  StyledInput,
  StyledLabel,
} from './StyledFormInput';

const FormInput = ({ label, name, type, value, onChangeFn, errorMsg }) => {
  return (
    <StyledFormInput type={type}>
      <StyledInput
        id={name}
        name={name}
        type={type}
        value={value}
        onChangeFn={onChangeFn}
      />
      <StyledLabel type={type} htmlFor={name} secondary={type !== 'checkbox'}>
        {label}
      </StyledLabel>
      {errorMsg ? (
        <StyledErrorMsg type={type}>{errorMsg}</StyledErrorMsg>
      ) : null}
    </StyledFormInput>
  );
};

export default FormInput;
