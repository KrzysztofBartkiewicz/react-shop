import React from 'react';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';

const Product = ({ id, name, image, price }) => {
  return (
    <>
      <Image src={image} alt={name} />
      <Heading headingType="h2">{name}</Heading>
      <Button icon={iconsTypes.cart} />
    </>
  );
};

export default Product;
