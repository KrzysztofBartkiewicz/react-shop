import React from 'react';
import { StyledLabel, StyledRadioInput } from './StyledRadioButton';

const RadioButton = ({ id, name, value, isChecked, children }) => {
  return (
    <div>
      <StyledRadioInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
      />
      <StyledLabel for={id}>{children}</StyledLabel>
    </div>
  );
};

export default RadioButton;
