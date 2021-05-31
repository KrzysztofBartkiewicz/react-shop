import React, { useContext } from 'react';
import RootContext from '../../../../context/RootContext';
import MaterialRangeInput from '../../../atoms/Input/MaterialRangeInput';
import {
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterProductByPrice';

const FilterProductByPrice = () => {
  const context = useContext(RootContext);
  const { handleProductPriceChange, productPriceRange, initialProducts } =
    context;

  const min = initialProducts
    ? Math.min(...initialProducts.map((product) => product.price))
    : 0;
  const max = initialProducts
    ? Math.max(...initialProducts.map((product) => product.price))
    : 3000;

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
