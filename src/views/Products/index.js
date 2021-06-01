import React, { useContext } from 'react';
import RootContext from '../../context/RootContext';
import { listTypes } from '../../helpers/listTypes';
import {
  StyledProducts,
  StyledProductsHeading,
  StyledFilterMenu,
  StyledList,
} from './StyledProducts';

const Products = () => {
  const context = useContext(RootContext);
  const { products } = context;

  const sortedProducts = [...products].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  return (
    <StyledProducts>
      <StyledProductsHeading headingType="h5">Products</StyledProductsHeading>
      <StyledFilterMenu />
      <StyledList array={sortedProducts} listType={listTypes.productsList} />
    </StyledProducts>
  );
};

export default Products;
