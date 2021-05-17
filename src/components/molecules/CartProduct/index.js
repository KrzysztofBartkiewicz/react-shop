import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';
import AmountSelector from '../AmountSelector';
import { StyledCartProduct } from './StyledCartProduct';

const CartProduct = ({ id, name, price, image, inCartQuantity }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart, changeCartQuantity } = context;

  return (
    <StyledCartProduct>
      <Image src={image} alt={name} cartImg />
      <Heading headingType="h1">{name}</Heading>
      <AmountSelector
        onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
        onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
        value={inCartQuantity}
      />
      <Heading headingType="h1">{`${(price * inCartQuantity).toFixed(
        2
      )}$`}</Heading>
      <Button
        onClickFn={() => deleteProductFromCart(id)}
        nav
        icon={iconsTypes.cancel}
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
