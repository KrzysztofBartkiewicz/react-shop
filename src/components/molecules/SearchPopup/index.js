import React, { useContext, useState, useEffect, useRef } from 'react';
import Button from '../../atoms/Button';
import RootContext from '../../../context/RootContext';
import List from '../List';
import SearchProduct from '../SearchProduct';
import useGlobalClickCoords from '../../../hooks/useGlobalClickCoords';
import { iconsTypes } from '../../../helpers/iconsTypes';
import { listTypes } from '../../../helpers/listTypes';
import { isClickOutside } from '../../../utils/clickDetection';
import {
  StyledSearchPopup,
  StyledSearchWrapper,
  StyledInput,
} from './StyledSearchPopup';

const SearchPopup = () => {
  const { initialProducts } = useContext(RootContext);
  const { isHomeRendered } = useContext(RootContext);

  const { x, y } = useGlobalClickCoords();

  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (
      isClickOutside(x, y, popupRef.current) &&
      isClickOutside(x, y, buttonRef.current)
    ) {
      setIsExpanded(false);
    }
  }, [x, y]);

  useEffect(() => {
    filterProducts();
  }, [inputValue]);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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

    setFilteredProducts([...filteredArr]);
    if (inputValue.length === 0) {
      setFilteredProducts([]);
    }
  };

  return (
    <StyledSearchPopup>
      <Button
        ref={buttonRef}
        onClickFn={handleExpand}
        whiteIcon={isHomeRendered}
        icon={iconsTypes.SearchIcon}
      />
      <StyledSearchWrapper ref={popupRef} isExpanded={isExpanded}>
        <StyledInput
          value={inputValue}
          onChangeFn={handleInputChange}
          placeholder="Search products..."
        />
        <List
          array={filteredProducts}
          listType={listTypes.cartList}
          listComponent={<SearchProduct searchedPhrase={inputValue} />}
        />
      </StyledSearchWrapper>
    </StyledSearchPopup>
  );
};

export default SearchPopup;
