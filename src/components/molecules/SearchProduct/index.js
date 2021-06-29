import React, { useContext } from 'react';
import Image from '../../atoms/Image';
import RootContext from '../../../context/RootContext';
import Button from '../../atoms/Button';
import { StyledSearchProduct } from './StyledSearchProduct';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledLink, StyledName } from './StyledSearchProduct';

const SearchProduct = (props) => {
  const { id, name, image, searchedPhrase } = props;

  const { cart, addProductToCart, deleteProductFromCart, setSearchVisibility } =
    useContext(RootContext);

  const phraseArr = [...searchedPhrase.toLowerCase()];

  const isInCart = cart.some((product) => product.id === id);

  return (
    <StyledSearchProduct onClick={() => setSearchVisibility(false)}>
      <StyledLink
        to={{
          pathname: `/${name.replace(/\s/g, '')}`,
          state: { ...props },
        }}
      >
        <Image src={image} alt={name} cartImg />
        <StyledName>
          {[...name].map((letter, index) =>
            phraseArr.includes(letter.toLowerCase()) ? (
              <b key={index}>{letter}</b>
            ) : (
              letter
            )
          )}
        </StyledName>
      </StyledLink>
      <Button
        icon={iconsTypes.CartIcon}
        round
        secondary={!isInCart}
        onClickFn={(event) => {
          event.stopPropagation();
          isInCart ? deleteProductFromCart(id) : addProductToCart(id);
        }}
      />
    </StyledSearchProduct>
  );
};

export default SearchProduct;
