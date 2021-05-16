import React, { useContext } from 'react';
import List from '../../components/molecules/List';
import RootContext from '../../context/RootContext';
import { listTypes } from '../../helpers/listTypes';
import { StyledProducts, StyledProductsHeading } from './StyledProducts';

const Products = () => {
  const context = useContext(RootContext);

  return (
    <StyledProducts>
      <StyledProductsHeading headingType="h1">Products</StyledProductsHeading>
      <List array={context.products} listType={listTypes.productsList} />
    </StyledProducts>
  );
};

export default Products;
