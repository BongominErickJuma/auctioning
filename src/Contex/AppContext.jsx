

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {

  const BASE_URL = import.meta.env.KCLIENT_BASE_URL;

  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading as true

  async function getUser() {
    setLoading(true); // Start loader when fetching begins
    const res = await fetch(`${BASE_URL}/userProfile`, {
      method:'Post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      setUser(data);

    }
    setLoading(false); // Stop loader when fetching completes
  }

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return (
    <AppContext.Provider value={{ token, setToken, user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
}
