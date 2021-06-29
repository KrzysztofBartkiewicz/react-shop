import React, { useContext, useState, useEffect, useRef } from 'react';
import RootContext from '../../../context/RootContext';
import List from '../List';
import SearchProduct from '../SearchProduct';
import Button from '../../atoms/Button';
import { listTypes } from '../../../helpers/listTypes';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { StyledSearchWrapper, StyledInput } from './StyledSearchPopup';

const SearchBox = () => {
  const { initialProducts, handleSearchOpen, isHomeRendered } =
    useContext(RootContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    filterProducts();
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filterProducts = () => {
    const filteredArr = initialProducts.filter(
      (product) =>
        product.name.toLowerCase().slice(0, inputValue.length) ===
        inputValue.toLowerCase()
    );

    setFilteredProducts([...filteredArr]);

    if (inputValue.length === 0) {
      setFilteredProducts([]);
    }
  };

  return (
    <StyledSearchWrapper>
      <StyledInput
        value={inputValue}
        onChangeFn={handleInputChange}
        placeholder="Search products..."
      />
      <List
        array={filteredProducts}
        listType={listTypes.cartList}
        listComponent={
          <SearchProduct
            onClickFn={() => handleSearchOpen(false)}
            searchedPhrase={inputValue}
          />
        }
      />
    </StyledSearchWrapper>
  );
};

export default SearchBox;
