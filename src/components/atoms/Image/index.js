import React from 'react';
import { StyledImage } from './StyledImage';

const Image = ({ src, alt, className }) => (
  <StyledImage src={src} alt={alt} className={className} />
);
export default Image;
