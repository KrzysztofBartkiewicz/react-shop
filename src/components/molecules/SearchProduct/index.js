import React, { useContext } from 'react';
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import RootContext from '../../../context/RootContext';
import { StyledSearchProduct } from './StyledSearchProduct';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledLinkInner, StyledLink } from './StyledSearchProduct';

const SearchProduct = (props) => {
  const { id, name, image, searchedPhrase, onClickFn } = props;
  const { cart, addProductToCart, deleteProductFromCart } =
    useContext(RootContext);
  const phraseArr = [...searchedPhrase.toLowerCase()];

  const isInCart = cart.some((product) => product.id === id);

  return (
    <StyledSearchProduct>
      <StyledLink
        to={{
          pathname: `/${name.replace(/\s/g, '')}`,
          state: { ...props },
        }}
        onClick={onClickFn}
      >
        <StyledLinkInner>
          <Image src={image} alt={name} cartImg />
          <Paragraph>
            {[...name].map((letter, index) =>
              phraseArr.includes(letter.toLowerCase()) ? (
                <b key={index}>{letter}</b>
              ) : (
                letter
              )
            )}
          </Paragraph>
        </StyledLinkInner>
      </StyledLink>
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
