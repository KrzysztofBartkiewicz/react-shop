import React, { useContext } from 'react';
import List from '../../components/molecules/List';
import RootContext from '../../context/RootContext';
import Heading from '../../components/atoms/Heading';
import { listTypes } from '../../helpers/listTypes';
import { StyledProducts, StyledProductsHeading } from './StyledProducts';

const Products = () => {
  const context = useContext(RootContext);

  return (
    <StyledProducts>
      <Heading headingType="h1">Products</Heading>
      <List array={context.products} listType={listTypes.productsList} />
    </StyledProducts>
  );
};

export default Products;
