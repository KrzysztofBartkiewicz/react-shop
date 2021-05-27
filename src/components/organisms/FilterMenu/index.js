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

// Input types:
// {
/* <input type="text" />
<input type="search" />
<input type="number" />
<input type="password" />
<input type="email" />
<input type="range" />
<input type="date" />
<input type="checkbox" />
<input type="file" />
<input type="radio" />
<input type="button" /> */
// }
