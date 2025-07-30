import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("bakers-user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setUserLoggedIn(true);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("bakers-user", JSON.stringify(userData));
    setCurrentUser(userData);
    setUserLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("bakers-user");
    setCurrentUser(null);
    setUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
