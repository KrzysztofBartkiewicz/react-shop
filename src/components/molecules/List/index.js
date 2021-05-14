import React from 'react';
import { listTypes } from '../../../helpers/listTypes';
import CartProduct from '../CartProduct';
import Product from '../Product';

const List = ({ array, listType }) => {
  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>
          {listType === listTypes.productsList ? (
            <Product {...item} />
          ) : (
            <CartProduct {...item} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
