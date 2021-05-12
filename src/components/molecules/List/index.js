import React from 'react';
import Product from '../Product';

const List = ({ array }) => {
  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
