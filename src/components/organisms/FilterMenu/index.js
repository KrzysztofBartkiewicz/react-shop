import React from 'react';
import FilterProductByCategory from '../../molecules/FilterBlocks/FilterProductByCategory';
import { StyledFilterMenu } from './StyledFilterMenu';
import FilterProductByName from '../../molecules/FilterBlocks/FilterProductByName';
import FilterProductByPrice from '../../molecules/FilterBlocks/FilterProductByPrice';

const FIlterMenu = ({ className }) => {
  return (
    <StyledFilterMenu className={className}>
      <FilterProductByName />
      <FilterProductByCategory />
      <FilterProductByPrice />
    </StyledFilterMenu>
  );
};

export default FIlterMenu;
