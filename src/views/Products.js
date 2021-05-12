import React, { useContext } from 'react';
import List from '../components/molecules/List';
import RootContext from '../context/RootContext';

const Products = () => {
  const context = useContext(RootContext);

  return (
    <div>
      <h1>Products</h1>
      <List array={context.products} />
    </div>
  );
};

export default Products;
