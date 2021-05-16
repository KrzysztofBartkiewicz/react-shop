import React, { useContext } from 'react';
import RootContext from '../../../context/RootContext';
import { iconsTypes } from '../../../helpers/iconsTypes';
import Heading from '../../atoms/Heading';
import Image from '../../atoms/Image';
import { StyledButton, StyledImgWrapper, StyledProduct } from './StyledProduct';

const Product = ({ id, name, image, price }) => {
  const context = useContext(RootContext);
  const { addProductToCart } = context;
  return (
    <StyledProduct>
      <StyledImgWrapper>
        <Image src={image} alt={name} />
        <StyledButton
          onClickFn={() => addProductToCart(id)}
          secondary
          round
          icon={iconsTypes.cart}
        />
      </StyledImgWrapper>
      <Heading headingType="h2">{name}</Heading>
    </StyledProduct>
  );
};

export default Product;
