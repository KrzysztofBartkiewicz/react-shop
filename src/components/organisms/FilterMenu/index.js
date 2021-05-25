import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { productsDataArray } from '../../../localData/productsDataArray';
import MaterialRangeInput from '../../atoms/Input/MaterialRangeInput';
import Select from '../../molecules/Select';
import Input from '../../atoms/Input/CustomInput';
import useMinMaxPrice from '../../../hooks/useMinMaxPrice';
import {
  StyledFilterMenu,
  StyledFilterWrapper,
  StyledParagraph,
} from './StyledFilterMenu';

const FIlterMenu = ({ className }) => {
  const context = useContext(RootContext);

  const {
    productCategory,
    productNameInput,
    handleProductCategoryChange,
    handleProductNameInputChange,
  } = context;

  const productCategories = [
    'all',
    ...new Set(productsDataArray.map((product) => product.category)),
  ];

  const [min, max] = useMinMaxPrice();

  return (
    <StyledFilterMenu className={className}>
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
      <StyledFilterWrapper>
        <StyledParagraph weight="bold" size="xxs">
          Category
        </StyledParagraph>
        <Select
          optionArray={productCategories}
          onChangeFn={handleProductCategoryChange}
          selectValue={productCategory}
        />
      </StyledFilterWrapper>
      <StyledFilterWrapper>
        <StyledParagraph weight="bold" size="xxs">
          Price
        </StyledParagraph>
        <MaterialRangeInput min={min} max={max} />
      </StyledFilterWrapper>
    </StyledFilterMenu>
  );
};

export default FIlterMenu;

// Input types:
{
  /* <input type="text" />
<input type="search" />
<input type="number" />
<input type="password" />
<input type="email" />
<input type="range" />
<input type="date" />
<input type="checkbox" />
<input type="file" />
<input type="radio" />
<input type="button" /> */
}
