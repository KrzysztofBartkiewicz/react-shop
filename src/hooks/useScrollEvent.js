import { useState, useEffect } from 'react';

const useScrollEvent = () => {
  const [scroll, setScroll] = useState({});

  const handleScroll = (e) => {
    setScroll(e);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scroll;
};

export default useScrollEvent;
