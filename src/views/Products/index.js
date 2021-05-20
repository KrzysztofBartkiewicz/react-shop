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

  return (
    <StyledProducts>
      <StyledProductsHeading headingType="h1">Products</StyledProductsHeading>
      <StyledFilterMenu />
      <StyledList array={context.products} listType={listTypes.productsList} />
    </StyledProducts>
  );
};

export default Products;
