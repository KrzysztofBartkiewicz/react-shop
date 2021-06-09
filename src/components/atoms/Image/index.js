import React from 'react';
import { StyledImage } from './StyledImage';

const Image = ({ src, alt, className, cartImg, listImage }) => (
  <StyledImage
    src={src}
    alt={alt}
    className={className}
    cartImg={cartImg}
    listImage={listImage}
  />
);
export default Image;
