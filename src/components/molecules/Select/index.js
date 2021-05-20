import React from 'react';
import SelectOption from '../../atoms/SelectOption';
import { StyledSelect, StyledSelectWrapper } from './StyledSelect';

const Select = ({ optionArray, onChangeFn, selectValue }) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect value={selectValue} onChange={onChangeFn}>
        {optionArray.map((option) => (
          <SelectOption optionValue={option}>{option}</SelectOption>
        ))}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};

export default Select;
