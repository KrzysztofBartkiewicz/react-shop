import { productsDataArray } from '../localData/productsDataArray';

const useMinMaxPrice = () => {
  const min = Math.min(...productsDataArray.map((product) => product.price));
  const max = Math.max(...productsDataArray.map((product) => product.price));
  return [min, max];
};

export default useMinMaxPrice;
