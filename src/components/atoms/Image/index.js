import React from 'react';
import { StyledImage } from './StyledImage';

const Image = ({ src, alt, className, cartImg }) => (
  <StyledImage src={src} alt={alt} className={className} cartImg={cartImg} />
);
export default Image;
