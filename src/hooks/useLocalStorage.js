const useLocalStorage = () => {
  const localStorageCart = JSON.parse(localStorage.getItem('cart'));
  const saveLocalStorageCart = (cart) =>
    localStorage.setItem('cart', JSON.stringify(cart));

  return [localStorageCart, saveLocalStorageCart];
};

export default useLocalStorage;
