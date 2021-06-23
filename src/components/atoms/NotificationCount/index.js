import React from 'react';
import { StyledNotificationCount } from './StyledNotificationCount';

const AmountInfo = ({ isVisible = true, value = 0, className }) => {
  return (
    <StyledNotificationCount className={className} isVisible={isVisible}>
      {value}
    </StyledNotificationCount>
  );
};

export default AmountInfo;
