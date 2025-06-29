import { useState, useCallback } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = useCallback(async (url, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, []);

  const post = useCallback((url, body) => {
    return makeRequest(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }, [makeRequest]);

  const get = useCallback((url) => {
    return makeRequest(url, {
      method: 'GET',
    });
  }, [makeRequest]);

  return {
    loading,
    error,
    post,
    get,
    makeRequest,
  };
};

export default useApi;