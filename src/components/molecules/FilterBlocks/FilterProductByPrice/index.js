import React, { useContext } from 'react';
import RootContext from '../../../../context/RootContext';
import {
  getProductMaxPrice,
  getProductMinPrice,
} from '../../../../utils/getProductPrices';
import MaterialRangeInput from '../../../atoms/Input/MaterialRangeInput';
import {
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterProductByPrice';

const FilterProductByPrice = () => {
  const context = useContext(RootContext);
  const { handleProductPriceChange, productPriceRange, initialProducts } =
    context;

  return (
    <StyledFilterWrapper>
      <StyledParagraph weight="bold" size="xxs">
        PRICE
      </StyledParagraph>
      <MaterialRangeInput
        value={productPriceRange}
        onChangeFn={handleProductPriceChange}
        min={getProductMinPrice(initialProducts)}
        max={getProductMaxPrice(initialProducts)}
      />
    </StyledFilterWrapper>
  );
};

export default FilterProductByPrice;
