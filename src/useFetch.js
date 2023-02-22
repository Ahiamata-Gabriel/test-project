import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [ispending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data for that reason');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setErr(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('');
        }
        setIsPending(false);
        setErr(error.message);
      });
    return () => abortController.abort();
  }, [url]);

  return { data, ispending, err };
};

export default useFetch;
