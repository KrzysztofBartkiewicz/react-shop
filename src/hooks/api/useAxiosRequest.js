import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosRequest = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setIsPending(false);
        setData(response.data);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useAxiosRequest;
