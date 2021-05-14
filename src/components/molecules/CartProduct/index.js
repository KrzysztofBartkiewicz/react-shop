import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';

const CartProduct = ({ id, name, price, image, inCartQuantity }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart } = context;
  return (
    <>
      <Image src={image} alt={name} />
      <Heading>{name}</Heading>
      <div>
        <button>-</button>
        <Heading>{inCartQuantity}</Heading>
        <button>+</button>
      </div>
      <Paragraph>{price}</Paragraph>
      <button onClick={() => deleteProductFromCart(id)}>X</button>
    </>
  );
};

export default CartProduct;
