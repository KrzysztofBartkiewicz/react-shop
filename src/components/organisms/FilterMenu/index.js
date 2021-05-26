import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { productsDataArray } from '../../../localData/productsDataArray';
import MaterialRangeInput from '../../atoms/Input/MaterialRangeInput';
import Select from '../../molecules/Select';
import useMinMaxPrice from '../../../hooks/useMinMaxPrice';
import FilterBlock from '../../molecules/FilterBlock';
import { StyledFilterMenu } from './StyledFilterMenu';
import FilterProductByName from '../../molecules/FilterProductByName';

const FIlterMenu = ({ className }) => {
  const context = useContext(RootContext);

  const { productCategory, handleProductCategoryChange } = context;

  const productCategories = [
    'all',
    ...new Set(productsDataArray.map((product) => product.category)),
  ];

  const [min, max] = useMinMaxPrice();

  return (
    <StyledFilterMenu className={className}>
      <FilterProductByName />
      <FilterBlock headingText="Category">
        <Select
          optionArray={productCategories}
          onChangeFn={handleProductCategoryChange}
          selectValue={productCategory}
        />
      </FilterBlock>
      <FilterBlock headingText="Price">
        <MaterialRangeInput min={min} max={max} />
      </FilterBlock>
    </StyledFilterMenu>
  );
};

export default FIlterMenu;

// Input types:
// {
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
// }
