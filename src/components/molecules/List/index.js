import React from 'react';
import { listTypes } from '../../../helpers/listTypes';
import CartProduct from '../CartProduct';
import Product from '../Product';
import { StyledList } from './StyledList';

const List = ({ array, listType }) => {
  return (
    <StyledList>
      {array.map((item) => (
        <li key={item.id}>
          {listType === listTypes.productsList ? (
            <Product {...item} />
          ) : (
            <CartProduct {...item} />
          )}
        </li>
      ))}
    </StyledList>
  );
};

export default List;
