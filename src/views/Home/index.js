import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/organisms/Header';
import List from '../../components/molecules/List';
import Product from '../../components/molecules/Product';
import RootContext from '../../context/RootContext';
import { StyledHome, StyledSelected } from './StyledHome';
import { listTypes } from '../../helpers/listTypes';
import { getUniqueRandoms } from '../../utils';
import { StyledSelectedHeading } from './StyledHome';

const Home = () => {
  const { setHomeRenderFlag, initialProducts } = useContext(RootContext);

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setHomeRenderFlag(true);
    return () => setHomeRenderFlag(false);
  }, []);

  useEffect(() => {
    if (initialProducts.length !== 0) {
      const randomArr = getUniqueRandoms(0, initialProducts.length - 1, 4);
      setSelected(randomArr.map((value) => initialProducts[value]));
    }
  }, [initialProducts]);

  return (
    <StyledHome>
      <Header />
      <StyledSelected>
        <StyledSelectedHeading headingType="h5">
          Selected for You
        </StyledSelectedHeading>
        {selected && (
          <List
            array={selected}
            listType={listTypes.productsList}
            listComponent={Product}
          />
        )}
      </StyledSelected>
    </StyledHome>
  );
};

export default Home;
