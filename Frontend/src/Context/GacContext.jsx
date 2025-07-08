import React, { createContext, useState } from "react";

export const GacContext = createContext(null);

const GacContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const GetUserData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/Get-User`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      console.log(data);
      setUser(data); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const ContextValue = {
    user,
    setUser,
    loading,
    refreshUser: GetUserData,
  };

  return (
    <GacContext.Provider value={ContextValue}>
      {props.children}
    </GacContext.Provider>
  );
};

export default GacContextProvider;
