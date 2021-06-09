import React, { useContext, useEffect } from 'react';
import RootContext from '../../context/RootContext';
import { StyledHeader, StyledHome } from './StyledHome';

const Home = () => {
  const { setHomeRenderFlag } = useContext(RootContext);

  useEffect(() => {
    setHomeRenderFlag(true);
    return () => setHomeRenderFlag(false);
  }, []);

  return (
    <StyledHome>
      <StyledHeader></StyledHeader>
    </StyledHome>
  );
};

export default Home;
