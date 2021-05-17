import React from 'react';
import { StyledAmountInfo } from './StyledAmountInfo';

const AmountInfo = ({ isVisible, value = 0, className }) => {
  return (
    <StyledAmountInfo className={className} isVisible={isVisible}>
      {value}
    </StyledAmountInfo>
  );
};

export default AmountInfo;
