import React, { createContext, useState, useEffect, useCallback } from "react";
import axiosInstance from "../service/axiosInstance";
import { parseAxiosError } from "../utils/axiosErrorHelper";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessKey = "authToken";
  const refreshKey = "refreshToken";
  const userKey = "user";

  // Login function (existing)
  const login = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const { data, status } = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (status === 200 && data.token) {
        localStorage.setItem(accessKey, data.token.accessToken);
        localStorage.setItem(refreshKey, data.token.refreshToken);
        localStorage.setItem(userKey, JSON.stringify(data.user));

        axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token.accessToken}`;

        setUser(data.user);
        return { ok: true };
      }
      return { ok: false, message: "Unexpected response" };
    } catch (err) {
      const parsed = parseAxiosError(err);
      console.log("Login error:", parsed);

      if (parsed.kind === "api") {
        return {
          ok: false,
          message: parsed.data?.message || "Server error",
          status: parsed.status,
        };
      }
      return { ok: false, message: parsed.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Restore user on initial load
  useEffect(() => {
    const storedToken = localStorage.getItem(accessKey);
    const storedUser = localStorage.getItem(userKey);

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }
    setLoading(false);
  }, []);

  // Registration function
  const register = useCallback(async (registrationData) => {
    try {
      setLoading(true);

      const { data, status } = await axiosInstance.post("/user/register", {
        name: registrationData.name,
        email: registrationData.email,
        user_name: registrationData.username,
        pass: registrationData.password,
        companyName:registrationData.companyName,
        user_role: registrationData.role || 3,
      });

      console.log("Registration response:", data);

      if (status === 200 || status === 201) {
        return {
          ok: true,
          user: data,
          message: "Registration successful",
        };
      }
      return { ok: false, message: "Unexpected response" };
    } catch (err) {
      const parsed = parseAxiosError(err);
      console.error("Registration error:", parsed);

      if (parsed.kind === "api") {
        return {
          ok: false,
          message: parsed.data?.message || "Registration failed",
          status: parsed.status,
        };
      }
      return { ok: false, message: parsed.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout function (existing)
  const logout = useCallback(() => {
    localStorage.removeItem(accessKey);
    localStorage.removeItem(refreshKey);
    localStorage.removeItem(userKey);
    delete axiosInstance.defaults.headers.common.Authorization;
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
