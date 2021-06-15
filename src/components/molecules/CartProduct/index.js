import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import Paragraph from '../../atoms/Paragraph';
import AmountSelector from '../AmountSelector';
import Button from '../../atoms/Button';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledCartProduct, StyledImage } from './StyledCartProduct';

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
      <Paragraph weight="bold">{name}</Paragraph>
      {!basic && (
        <>
          <Paragraph>{category}</Paragraph>
          <AmountSelector
            onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
            onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
            value={inCartQuantity}
          />
        </>
      )}

      <Paragraph>{totalProductPrice}</Paragraph>
      {!basic && (
        <Button
          onClickFn={() => deleteProductFromCart(id)}
          icon={iconsTypes.CancelIcon}
          bgIcon
        />
      )}
    </StyledCartProduct>
  );
};

export default CartProduct;
