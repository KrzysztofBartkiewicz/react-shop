import { useState, useEffect } from 'react';

const useScrollPositon = () => {
  const [scroll, setScroll] = useState(null);

  const handleScroll = (e) => {
    setScroll(e);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return scroll;
};

export default useScrollPositon;
