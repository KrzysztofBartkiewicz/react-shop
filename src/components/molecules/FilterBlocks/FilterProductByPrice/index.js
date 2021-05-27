import React, { useContext } from 'react';
import useMinMaxPrice from '../../../../hooks/useMinMaxPrice';
import RootContext from '../../../../context/RootContext';
import MaterialRangeInput from '../../../atoms/Input/MaterialRangeInput';
import {
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterProductByPrice';

const FilterProductByPrice = () => {
  const [min, max] = useMinMaxPrice();
  const context = useContext(RootContext);
  const { handleProductPriceChange, productPriceRange } = context;

  return (
    <StyledFilterWrapper>
      <StyledParagraph weight="bold" size="xxs">
        Name
      </StyledParagraph>
      <MaterialRangeInput
        value={productPriceRange}
        onChangeFn={handleProductPriceChange}
        min={min}
        max={max}
      />
    </StyledFilterWrapper>
  );
};

export default FilterProductByPrice;
