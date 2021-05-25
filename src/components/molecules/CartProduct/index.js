import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import AmountSelector from '../AmountSelector';
import { StyledCartProduct, StyledParagraph } from './StyledCartProduct';

const CartProduct = ({ id, name, price, image, inCartQuantity, category }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart, changeCartQuantity } = context;

  const totalProductPrice = (price * inCartQuantity).toFixed(2);

  return (
    <StyledCartProduct>
      <Image src={image} alt={name} cartImg />
      <StyledParagraph weight="bold">{name}</StyledParagraph>
      <Paragraph>{category}</Paragraph>
      <AmountSelector
        onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
        onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
        value={inCartQuantity}
      />
      <Paragraph>{totalProductPrice}</Paragraph>
      <Button
        onClickFn={() => deleteProductFromCart(id)}
        nav
        icon={iconsTypes.cancel}
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
