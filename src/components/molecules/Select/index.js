import React from 'react';
import SelectOption from '../../atoms/SelectOption';

const Select = ({ optionArray, onChangeFn, selectValue }) => {
  return (
    <select value={selectValue} onChange={onChangeFn}>
      {optionArray.map((option) => (
        <SelectOption optionValue={option}>{option}</SelectOption>
      ))}
    </select>
  );
};

export default Select;
