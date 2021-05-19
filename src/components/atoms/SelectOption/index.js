import React from 'react';

const SelectOption = ({ children, optionValue }) => (
  <option value={optionValue}>{children}</option>
);

export default SelectOption;
