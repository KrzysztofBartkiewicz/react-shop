import React, { useContext } from 'react';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import RootContext from '../../../context/RootContext';
import { StyledSearchProduct } from './StyledSearchProduct';
import { iconsTypes } from '../../../helpers/iconsTypes';

const SearchProduct = ({ id, name, image, searchedPhrase }) => {
  const { cart, addProductToCart, deleteProductFromCart } =
    useContext(RootContext);
  const phraseArr = [...searchedPhrase.toLowerCase()];

  const isInCart = cart.some((product) => product.id === id);

  return (
    <StyledSearchProduct>
      <Image src={image} alt={name} cartImg />
      <Paragraph>
        {[...name].map((letter) =>
          phraseArr.includes(letter.toLowerCase()) ? <b>{letter}</b> : letter
        )}
      </Paragraph>
      <Button
        icon={iconsTypes.CartIcon}
        round
        secondary={!isInCart}
        onClickFn={
          isInCart
            ? () => deleteProductFromCart(id)
            : () => addProductToCart(id)
        }
      />
    </StyledSearchProduct>
  );
};

export default SearchProduct;
