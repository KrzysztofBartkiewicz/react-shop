import React, { useContext } from 'react';
import RootContext from '../../../../context/RootContext';
import Input from '../../../atoms/Input/CustomInput';

import {
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterProductByName';

const FilterProductByName = () => {
  const context = useContext(RootContext);

  const { productNameInput, handleProductNameInputChange } = context;

  return (
    <StyledFilterWrapper>
      <StyledParagraph weight="bold" size="xxs">
        Name
      </StyledParagraph>
      <Input
        placeholder="search products..."
        value={productNameInput}
        onChangeFn={handleProductNameInputChange}
      />
    </StyledFilterWrapper>
  );
};

export default FilterProductByName;
