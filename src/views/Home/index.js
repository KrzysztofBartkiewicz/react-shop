import React, { useContext, useEffect } from 'react';
import Header from '../../components/organisms/Header';
import RootContext from '../../context/RootContext';
import { StyledHome } from './StyledHome';

const Home = () => {
  const { setHomeRenderFlag } = useContext(RootContext);

  useEffect(() => {
    setHomeRenderFlag(true);
    return () => setHomeRenderFlag(false);
  }, []);

  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

export default Home;
