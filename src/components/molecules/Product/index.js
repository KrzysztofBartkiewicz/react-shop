import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';

const Product = ({ id, name, image, price }) => {
  const context = useContext(RootContext);
  const { addProductToCart } = context;
  return (
    <>
      <Image src={image} alt={name} />
      <Heading headingType="h2">{name}</Heading>
      <Button onClickFn={() => addProductToCart(id)} icon={iconsTypes.cart} />
    </>
  );
};

export default Product;
