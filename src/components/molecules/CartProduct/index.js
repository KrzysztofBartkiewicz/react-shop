import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import {
  StyledCartProduct,
  StyledImage,
  StyledName,
  StyledAmountSelector,
  StyledCategory,
  StyledPrice,
  StyledRemoveButton,
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
      <StyledName weight="bold">{name}</StyledName>
      {!basic && (
        <>
          <StyledCategory>{category}</StyledCategory>
          <StyledAmountSelector
            onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
            onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
            value={inCartQuantity}
          />
        </>
      )}

      <StyledPrice>{totalProductPrice}</StyledPrice>
      {!basic && (
        <StyledRemoveButton
          onClickFn={() => deleteProductFromCart(id)}
          icon={iconsTypes.CancelIcon}
          bgIcon
        />
      )}
    </StyledCartProduct>
  );
};

export default CartProduct;
