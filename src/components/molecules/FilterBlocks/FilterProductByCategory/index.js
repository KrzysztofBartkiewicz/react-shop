import React, { useContext } from 'react';
import RootContext from '../../../../context/RootContext';
import Select from '../../../molecules/Select';
import {
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterProductByCategory';

const FilterProductByCategory = () => {
  const context = useContext(RootContext);

  const { initialProducts, productCategory, handleProductCategoryChange } =
    context;

  const productCategories = [
    'all',
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  return (
    <StyledFilterWrapper>
      <StyledParagraph weight="bold" size="xxs">
        Name
      </StyledParagraph>
      <Select
        optionArray={productCategories}
        onChangeFn={handleProductCategoryChange}
        selectValue={productCategory}
      />
    </StyledFilterWrapper>
  );
};

export default FilterProductByCategory;
