import React from 'react';
import { listTypes } from '../../../helpers/listTypes';
import CartProduct from '../CartProduct';
import Product from '../Product';
import { StyledList, StyledListItem } from './StyledList';

const List = ({ array, listType }) => {
  return (
    <StyledList listType={listType}>
      {array.map((item) => (
        <StyledListItem key={item.id}>
          {listType === listTypes.productsList ? (
            <Product {...item} />
          ) : (
            <CartProduct {...item} />
          )}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
