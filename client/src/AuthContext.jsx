import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

function AuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem("adminToken") ? true : false;
  });

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAdminLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// export const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
