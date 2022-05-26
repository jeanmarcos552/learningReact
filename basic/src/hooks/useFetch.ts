import { useEffect, useState } from 'react';

export function useFetch(url: string, method = 'get') {
  const [response, setResponse] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((res) => res.json())
      .then((json) =>
        setResponse({
          loading: false,
          data: json,
        })
      );
  }, [url, method]);

  return response;
}
