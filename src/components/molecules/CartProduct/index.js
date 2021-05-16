import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import AmountSelector from '../AmountSelector';
import {
  StyledCartProduct,
  StyledImage,
  StyledImgWrapper,
} from './StyledCartProduct';

const CartProduct = ({ id, name, price, image, inCartQuantity }) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart } = context;

  return (
    <StyledCartProduct>
      <StyledImgWrapper>
        <StyledImage src={image} alt={name} />
      </StyledImgWrapper>
      <Heading>{name}</Heading>
      <AmountSelector value={inCartQuantity} />
      <Paragraph>{price}</Paragraph>
      <Button
        onClickFn={() => deleteProductFromCart(id)}
        nav
        icon={iconsTypes.cancel}
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
