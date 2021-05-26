import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import Input from '../../atoms/Input/CustomInput';
import { StyledParagraph } from '../../atoms/Paragraph/StyledParagraph';

const FilterProductByName = () => {
  const context = useContext(RootContext);

  const { productNameInput, handleProductNameInputChange } = context;

  return (
    <>
      <StyledParagraph weight="bold" size="xxs">
        Name
      </StyledParagraph>
      <Input
        placeholder="search products..."
        value={productNameInput}
        onChangeFn={handleProductNameInputChange}
      />
    </>
  );
};

export default FilterProductByName;
