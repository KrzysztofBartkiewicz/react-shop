import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';
import AmountSelector from '../AmountSelector';
import { StyledCartProduct, StyledProductName } from './StyledCartProduct';

const CartProduct = ({ id, name, price, image, inCartQuantity, category }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart, changeCartQuantity } = context;

  const totalPrice = (price * inCartQuantity).toFixed(2);

  return (
    <StyledCartProduct>
      <Image src={image} alt={name} cartImg />
      <StyledProductName headingType="h2">{name}</StyledProductName>
      <Heading>{category}</Heading>
      <AmountSelector
        onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
        onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
        value={inCartQuantity}
      />
      <Heading headingType="h2">{totalPrice}</Heading>
      <Button
        onClickFn={() => deleteProductFromCart(id)}
        nav
        icon={iconsTypes.cancel}
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
