import React from 'react';
import SelectOption from '../../atoms/SelectOption';
import { StyledSelect, StyledSelectWrapper } from './StyledSelect';

const Select = ({ optionArray, onChangeFn, selectValue, name, className }) => {
  return (
    <StyledSelectWrapper className={className}>
      <StyledSelect name={name} value={selectValue} onChange={onChangeFn}>
        {optionArray.map((option) => (
          <SelectOption key={option} optionValue={option}>
            {option}
          </SelectOption>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};

export default Select;
