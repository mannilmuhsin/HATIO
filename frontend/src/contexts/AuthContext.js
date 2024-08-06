// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { login, register, logout } from "../services/authService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      // You might want to fetch user data here
    }
  }, []);

  const loginUser = async (credentials) => {
    const data = await login(credentials);
    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
  };

  const registerUser = async (userData) => {
    await register(userData);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loginUser, registerUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
