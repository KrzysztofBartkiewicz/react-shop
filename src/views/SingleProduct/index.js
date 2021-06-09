import React, { useContext } from 'react';
import RootContext from '../../context/RootContext';
import Button from '../../components/atoms/Button';
import AmountSelector from '../../components/molecules/AmountSelector';
import { capitalize } from '../../utils/stringUtils';
import {
  StyledDetailsWrapper,
  StyledImage,
  StyledImageWrapper,
  StyledCategory,
  StyledPrice,
  StyledSingleProduct,
  StyleName,
  StyledDescription,
  StyledInnerWrapper,
  StyledButtonsWrapper,
  StyledLabel,
} from './StyledSingleProduct';

const SingleProduct = ({ location }) => {
  const { id } = location.state;
  const {
    initialProducts,
    addProductToCart,
    deleteProductFromCart,
    changeCartQuantity,
    cart,
  } = useContext(RootContext);

  const { image, name, category, price, description } = initialProducts.find(
    (product) => product.id === id
  );

  const isInCart = cart.some((product) => product.id === id);

  let inCartQuantity = null;
  if (isInCart) {
    inCartQuantity = cart.find((product) => product.id === id).inCartQuantity;
  }

  return (
    <StyledSingleProduct>
      <StyledImageWrapper>
        <StyledImage src={image} alt={name} />
      </StyledImageWrapper>
      <StyledDetailsWrapper>
        <StyleName headingType="h2">{name}</StyleName>
        <StyledPrice headingType="h2">${price}</StyledPrice>

        <StyledInnerWrapper>
          <StyledLabel secondary>Category:</StyledLabel>
          <StyledCategory>{capitalize(category)}</StyledCategory>
        </StyledInnerWrapper>

        <StyledInnerWrapper>
          <StyledLabel secondary>Description:</StyledLabel>
          <StyledDescription>{description}</StyledDescription>
        </StyledInnerWrapper>

        <StyledInnerWrapper>
          {isInCart && <StyledLabel secondary>Quantity:</StyledLabel>}

          <StyledButtonsWrapper>
            {isInCart ? (
              <>
                <AmountSelector
                  value={inCartQuantity}
                  onAddFn={() => changeCartQuantity(id, inCartQuantity + 1)}
                  onLessFn={() => changeCartQuantity(id, inCartQuantity - 1)}
                />
                <Button onClickFn={() => deleteProductFromCart(id)}>
                  REMOVE FROM CART
                </Button>
              </>
            ) : (
              <Button onClickFn={() => addProductToCart(id)}>
                ADD TO CART
              </Button>
            )}
          </StyledButtonsWrapper>
        </StyledInnerWrapper>
      </StyledDetailsWrapper>
    </StyledSingleProduct>
  );
};

export default SingleProduct;
