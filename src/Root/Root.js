import React, { useState, useEffect } from 'react';
import { client } from '../contentful/client';
import RootContext from '../context/RootContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Router from '../routing/Router';
import GlobalStylesTemplate from '../templates/GlobalStylesTemplate';
import swalAlert from '../utils/sweetalert2';

const Root = () => {
  const [localStorageCart, saveLocalStorageCart] = useLocalStorage();

  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cart, setCart] = useState(localStorageCart);
  const [cartProductsQuantity, setCartProductsQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  //filters states:
  const [productCategory, setProductCategory] = useState('all');
  const [productNameInput, setProductNameInput] = useState('');
  const [productPriceRange, setProductPriceRange] = useState([0, 3000]);

  const setContentfulData = (data) => {
    const formatedData = data.map((item) => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;

      return {
        ...item.fields,
        id,
        image,
      };
    });

    setInitialProducts([...formatedData]);
    setProducts([...formatedData]);
  };

  const getContentfulData = () => {
    client
      .getEntries({
        content_type: 'product',
      })
      .then((res) => setContentfulData(res.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getContentfulData();
  }, []);

  useEffect(() => {
    setCartProductsQuantity(cart.length);
    saveLocalStorageCart(cart);
    countTotalPrice();
  }, [cart]);

  useEffect(() => {
    filterProducts();
  }, [productCategory, productNameInput, productPriceRange]);

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

  const handleCartModalOpen = () => {
    setCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setCartModalOpen(false);
  };

  const addProductToCart = (productId) => {
    const product = products.find((el) => el.id === productId);
    setCart((prev) => [...new Set([...prev, product])]);
    swalAlert();
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

  return (
    <RootContext.Provider
      value={{
        products,
        initialProducts,
        cartModalOpen,
        cart,
        cartProductsQuantity,
        cartTotalPrice,
        productCategory,
        productNameInput,
        productPriceRange,
        handleProductCategoryChange,
        handleProductNameInputChange,
        handleProductPriceChange,
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
