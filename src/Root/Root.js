import React, { useState, useEffect } from 'react';
import RootContext from '../context/RootContext';
import { productsDataArray } from '../localData/productsDataArray';
import Router from '../routing/Router';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';

const Root = () => {
  const saveCartInLS = () => localStorage.setItem('cart', JSON.stringify(cart));
  const getCartFromLS = () => JSON.parse(localStorage.getItem('cart'));

  const [products, setProducts] = useState([...productsDataArray]);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cart, setCart] = useState(getCartFromLS());
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  //filters states:
  const [productCategory, setProductCategory] = useState('all');

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  useEffect(() => {
    setCartProductsQuantity(cart.length);
    saveCartInLS();
    countTotalPrice();
  }, [cart]);

  useEffect(() => {
    filterProductsByCategory();
  }, [productCategory]);

  const filterProductsByCategory = () => {
    if (productCategory === 'all') {
      setProducts([...productsDataArray]);
      return;
    }
    const filteredProducts = productsDataArray.filter(
      (product) => product.category === productCategory
    );
    setProducts([...filteredProducts]);
  };

  const countTotalPrice = () => {
    const total = cart.reduce(
      (sum, product) => sum + product.price * product.inCartQuantity,
      0
    );
    setCartTotalPrice(total);
  };

  //-------------------------API-----------------------------------------

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((data) => processData(data));
  // }, []);

  // const processData = (data) => {
  //   const processed = data.map(
  //     ({ category, description, id, image, price, title }) => {
  //       return {
  //         id,
  //         price,
  //         image,
  //         category,
  //         description,
  //         name: title,
  //         productQuantity: 30,
  //         inCartQuantity: 1,
  //       };
  //     }
  //   );

  //   setProducts([...processed]);
  // };

  //--------------------------------------------------------------------------

  const handleCartModalOpen = () => {
    setCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setCartModalOpen(false);
  };

  const addProductToCart = (productId) => {
    const product = products.find((el) => el.id === productId);
    setCart((prev) => [...new Set([...prev, product])]);
  };

  const deleteProductFromCart = (productId) => {
    const newCart = cart.filter((el) => {
      if (el.id === productId) {
        el.inCartQuantity = 1;
      }
      return el.id !== productId;
    });

    setCart([...newCart]);
  };

  const changeCartQuantity = (productId, value) => {
    const mappedCart = cart.map((product) => {
      return product.id === productId
        ? {
            ...product,
            inCartQuantity: value,
          }
        : product;
    });

    setCart([...new Set(mappedCart)]);
  };

  // const changeCartProductsQuantity = () => {
  //   let quantity = 0;
  //   if (cart.length !== 0) {
  //     quantity = cart.reduce((acc, product) => acc + product.inCartQuantity, 0);
  //   }
  //   setCartProductsQuantity(quantity);
  // };

  return (
    <RootContext.Provider
      value={{
        products,
        cartModalOpen,
        cart,
        cartProductsQuantity,
        cartTotalPrice,
        productCategory,
        handleProductCategoryChange,
        addProductToCart,
        deleteProductFromCart,
        handleCartModalOpen,
        handleCartModalClose,
        changeCartQuantity,
      }}
    >
      <GlobalStylesTemplate>
        <Router />
      </GlobalStylesTemplate>
    </RootContext.Provider>
  );
};

export default Root;
