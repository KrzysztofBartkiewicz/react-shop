import React, { useState, useEffect } from 'react';
import RootContext from '../context/RootContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Router from '../routing/Router';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import swalAlert from '../utils/sweetalert2';
import {
  getContentfulData,
  getContentfulDeliveryMethods,
} from '../utils/contentful';
import {
  getProductMaxPrice,
  getProductMinPrice,
} from '../utils/getProductPrices';

const Root = () => {
  const [localStorageCart, saveLocalStorageCart] = useLocalStorage();

  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [deliveryMethods, setDeliveryMethods] = useState([]);
  const [cart, setCart] = useState(localStorageCart || []);
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  //filters states:
  const [productCategory, setProductCategory] = useState('all');
  const [productNameInput, setProductNameInput] = useState('');
  const [productPriceRange, setProductPriceRange] = useState([0, 0]);

  const [isHomeRendered, setIsHomeRendered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    getCMSData();
  }, []);

  useEffect(() => {
    setCartProductsQuantity(cart.length);
    saveLocalStorageCart(cart);
    countTotalPrice();
  }, [cart]);

  useEffect(() => {
    filterProducts();
  }, [productCategory, productNameInput, productPriceRange]);

  const getCMSData = async () => {
    const contentfulData = await getContentfulData();

    if (contentfulData) {
      setInitialProducts([...contentfulData]);
      setProducts([...contentfulData]);

      setProductPriceRange([
        getProductMinPrice(contentfulData),
        getProductMaxPrice(contentfulData),
      ]);
    }

    const deliveryMethods = await getContentfulDeliveryMethods();
    setDeliveryMethods([...deliveryMethods]);
  };

  const setSearchVisibility = (value) => {
    setIsSearchOpen(value);
  };

  const setCartVisibility = (value) => {
    setIsCartOpen(value);
  };

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const setHomeRenderFlag = (isRendered) => {
    setIsHomeRendered(isRendered);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleProductNameInputChange = (e) => {
    setProductNameInput(e.target.value);
  };

  const handleProductPriceChange = (value) => {
    setProductPriceRange(value);
  };

  const filterProducts = () => {
    let tempProducts = [...initialProducts];

    if (productNameInput.length !== 0) {
      tempProducts = tempProducts.filter(
        (product) =>
          product.name.toLowerCase().slice(0, productNameInput.length) ===
          productNameInput.toLowerCase()
      );
    }

    if (productCategory !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === productCategory
      );
    }

    tempProducts = tempProducts.filter(
      (product) =>
        product.price >= productPriceRange[0] &&
        product.price <= productPriceRange[1]
    );

    setProducts([...tempProducts]);
  };

  const countTotalPrice = () => {
    const total = cart.reduce(
      (sum, product) => sum + product.price * product.inCartQuantity,
      0
    );
    setCartTotalPrice(total);
  };

  const handleSetDeliveryPrice = (price) => {
    setDeliveryPrice(price);
  };

  const addProductToCart = (productId) => {
    const product = products.find((el) => el.id === productId);
    product.inCartQuantity = 1;
    setCart((prev) => [...new Set([...prev, product])]);
    swalAlert('Cart', 'Product added');
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

  const deleteAllItemsFromCart = () => {
    setCart([]);
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

  return (
    <RootContext.Provider
      value={{
        products,
        cart,
        cartProductsQuantity,
        cartTotalPrice,
        productCategory,
        productNameInput,
        productPriceRange,
        isHomeRendered,
        initialProducts,
        isMenuOpen,
        isSearchOpen,
        isCartOpen,
        deliveryMethods,
        deliveryPrice,
        handleSetDeliveryPrice,
        setCartVisibility,
        setSearchVisibility,
        toggleMenuOpen,
        setHomeRenderFlag,
        handleProductCategoryChange,
        handleProductNameInputChange,
        handleProductPriceChange,
        addProductToCart,
        deleteProductFromCart,
        changeCartQuantity,
        deleteAllItemsFromCart,
      }}
    >
      <GlobalStylesTemplate>
        <Router />
      </GlobalStylesTemplate>
    </RootContext.Provider>
  );
};

export default Root;
