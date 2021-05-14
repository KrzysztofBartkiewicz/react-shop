import React, { useContext } from 'react';
import List from '../components/molecules/List';
import RootContext from '../context/RootContext';
import { listTypes } from '../helpers/listTypes';

const Products = () => {
  const context = useContext(RootContext);

  return (
    <div>
      <h1>Products</h1>
      <List array={context.products} listType={listTypes.productsList} />
    </div>
  );
};

export default Products;
