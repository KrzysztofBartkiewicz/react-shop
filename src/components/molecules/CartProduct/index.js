import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import {
  StyledAmountSelector,
  StyledCartProduct,
  StyledName,
  StyledCategory,
  StyledImage,
  StyledTotalPrice,
  StyledButton,
} from './StyledCartProduct';

const CartProduct = ({
  id,
  name,
  price,
  image,
  inCartQuantity,
  category,
  basic,
}) => {
  const context = useContext(RootContext);
  const { deleteProductFromCart, changeCartQuantity } = context;

  const totalProductPrice = (price * inCartQuantity).toFixed(2);

  return (
    <StyledCartProduct basic={basic}>
      <StyledImage basic={basic} src={image} alt={name} cartImg />
      <StyledName basic={basic} weight="bold">
        {name}
      </StyledName>
      <StyledCategory basic={basic}>{category}</StyledCategory>
      <StyledAmountSelector
        basic={basic}
        onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
        onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
        value={inCartQuantity}
      />
      <StyledTotalPrice basic={basic}>{totalProductPrice}</StyledTotalPrice>
      <StyledButton
        basic={basic}
        onClickFn={() => deleteProductFromCart(id)}
        icon={iconsTypes.cancel}
        bgIcon
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
