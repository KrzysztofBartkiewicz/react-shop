import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { productsDataArray } from '../../../localData/productsDataArray';
import MaterialRangeInput from '../../atoms/Input/MaterialRangeInput';
import Select from '../../molecules/Select';
import Input from '../../atoms/Input/CustomInput';
import useMinMaxPrice from '../../../hooks/useMinMaxPrice';
import {
  StyledFilterMenu,
  StyledHeading,
  StyledMenuHeading,
} from './StyledFilterMenu';

const FIlterMenu = ({ className }) => {
  const context = useContext(RootContext);

  const {
    productCategory,
    productNameInput,
    handleProductCategoryChange,
    handleProductNameInputChange,
    handleProductPriceChange,
  } = context;

  const productCategories = [
    'all',
    ...new Set(productsDataArray.map((product) => product.category)),
  ];

  const [min, max] = useMinMaxPrice();

  return (
    <StyledFilterMenu className={className}>
      <StyledMenuHeading headingType="h2">Filter by:</StyledMenuHeading>
      <StyledHeading>Name</StyledHeading>
      <Input
        placeholder="search products..."
        value={productNameInput}
        onChangeFn={handleProductNameInputChange}
      />
      <StyledHeading>Category</StyledHeading>
      <Select
        optionArray={productCategories}
        onChangeFn={handleProductCategoryChange}
        selectValue={productCategory}
      />
      <StyledHeading>Price</StyledHeading>
      <MaterialRangeInput
        min={min}
        max={max}
        onChangeCommittedFn={handleProductPriceChange}
      />
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
