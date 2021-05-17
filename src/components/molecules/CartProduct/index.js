import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import AmountSelector from '../AmountSelector';
import { StyledCartProduct, StyledImage } from './StyledCartProduct';

const CartProduct = ({ id, name, price, image, inCartQuantity }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart, changeCartQuantity } = context;

  return (
    <StyledCartProduct>
      <StyledImage src={image} alt={name} />
      <Heading>{name}</Heading>
      <AmountSelector
        onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
        onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
        value={inCartQuantity}
      />
      <Button
        onClickFn={() => deleteProductFromCart(id)}
        nav
        icon={iconsTypes.cancel}
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
