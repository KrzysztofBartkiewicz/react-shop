import React, { useState } from 'react';
import RootContext from '../context/RootContext';
import { productsDataArray } from '../localData/productsDataArray';
import Router from '../routing/Router';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';

const Root = () => {
  const [products, setProducts] = useState([...productsDataArray]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleCartModalOpen = () => {
    setCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setCartModalOpen(false);
  };

  return (
    <RootContext.Provider
      value={{
        products,
        cartModalOpen,
        handleCartModalOpen,
        handleCartModalClose,
      }}
    >
      <GlobalStylesTemplate>
        <Router />
        {/* <Button onClickFn={() => alert('KOSZYK')}>add to cart</Button>
      <Button onClickFn={() => console.log('OPINIE')} secondary>
        Reviews (2)
      </Button>
      <Button icon={iconsTypes.heart}></Button>
      <Input placeholder="Email" /> */}
      </GlobalStylesTemplate>
    </RootContext.Provider>
  );
};

export default Root;
