import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { productsDataArray } from '../../../localData/productsDataArray';
import Input from '../../atoms/Input/CustomInput';
import MaterialRangeInput from '../../atoms/Input/MaterialRangeInput';
import Select from '../../molecules/Select';

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

  const minPrice = Math.min(
    ...productsDataArray.map((product) => product.price)
  );
  const maxPrice = Math.max(
    ...productsDataArray.map((product) => product.price)
  );

  return (
    <div className={className}>
      <Input
        placeholder="search products..."
        value={productNameInput}
        onChangeFn={handleProductNameInputChange}
      />

      <Select
        optionArray={productCategories}
        onChangeFn={handleProductCategoryChange}
        selectValue={productCategory}
      />

      <MaterialRangeInput
        min={minPrice}
        max={maxPrice}
        onChangeCommittedFn={handleProductPriceChange}
      />
    </div>
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
