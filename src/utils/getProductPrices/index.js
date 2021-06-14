export const getProductMaxPrice = (productsData) =>
  productsData
    ? Math.max(...productsData.map((product) => product.price))
    : 3000;

export const getProductMinPrice = (productsData) =>
  productsData ? Math.min(...productsData.map((product) => product.price)) : 0;
