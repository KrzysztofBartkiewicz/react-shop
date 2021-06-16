import { useEffect, useState } from 'react';

const useGlobalClickCoords = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleGlobalClick = (event) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return coords;
};

export default useGlobalClickCoords;
