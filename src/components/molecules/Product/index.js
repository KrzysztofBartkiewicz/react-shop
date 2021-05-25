import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import { StyledButton, StyledImgWrapper, StyledProduct } from './StyledProduct';

const Product = ({ id, name, image, price }) => {
  const context = useContext(RootContext);
  const { addProductToCart, deleteProductFromCart, cart } = context;

  const isInCart = cart.some((product) => product.id === id);

  return (
    <StyledProduct>
      <StyledImgWrapper>
        <Image src={image} alt={name} />
        <StyledButton
          onClickFn={() =>
            isInCart ? deleteProductFromCart(id) : addProductToCart(id)
          }
          secondary={!isInCart}
          round
          icon={iconsTypes.cart}
        />
      </StyledImgWrapper>
      <Paragraph size="xxs">{name}</Paragraph>
      <Paragraph size="xs" weight="bold">
        {price}$
      </Paragraph>
    </StyledProduct>
  );
};

export default Product;
