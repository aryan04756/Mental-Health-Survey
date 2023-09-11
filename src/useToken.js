import { useState } from 'react';

function useToken() {
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Initialize from local storage or set to null

  return {
    token,
    setToken,
  };
}

export default useToken;