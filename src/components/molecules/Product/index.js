import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { iconsTypes } from '../../../helpers/iconsTypes';
import RootContext from '../../../context/RootContext';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import { StyledButton, StyledProductWrapper } from './StyledProduct';

const Product = (props) => {
  const { id, name, image, price } = props;

  const context = useContext(RootContext);
  const { addProductToCart, deleteProductFromCart, cart } = context;

  const isInCart = cart.some((product) => product.id === id);

  return (
    <StyledProductWrapper>
      <Link
        to={{
          pathname: `/${name.replace(/\s/g, '')}`,
          state: { ...props },
        }}
      >
        <Image src={image} alt={name} listImage />
        <Paragraph size="xxs">{name}</Paragraph>
        <Paragraph size="xs" weight="bold">
          {price}$
        </Paragraph>
      </Link>
      <StyledButton
        onClickFn={() =>
          isInCart ? deleteProductFromCart(id) : addProductToCart(id)
        }
        secondary={!isInCart}
        round
        icon={iconsTypes.CartIcon}
      />
    </StyledProductWrapper>
  );
};

export default Product;
