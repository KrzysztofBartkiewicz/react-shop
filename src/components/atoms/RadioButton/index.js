import React from 'react';
import { StyledLabel, StyledRadioInput } from './StyledRadioButton';

const RadioButton = ({ name, value, icon, children, onChangeFn }) => {
  return (
    <div>
      <StyledRadioInput
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={onChangeFn}
      />
      <StyledLabel children={children} icon={icon} htmlFor={value}>
        {children}
      </StyledLabel>
    </div>
  );
};

export default RadioButton;
