import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { productsDataArray } from '../../../localData/productsDataArray';
import Select from '../../molecules/Select';

const FIlterMenu = () => {
  const context = useContext(RootContext);
  const productCategories = [
    'all',
    ...new Set(productsDataArray.map((product) => product.category)),
  ];
  return (
    <>
      <Select optionArray={productCategories} />
    </>
  );
};

export default FIlterMenu;
