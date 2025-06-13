import React, { createContext, useState, useEffect, useCallback } from 'react';
import axiosInstance from '../service/axiosInstance';
import { parseAxiosError } from '../utils/axiosErrorHelper';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true = checking token
  const accessKey = 'authToken';
  const refreshKey = 'refreshToken';
  const userKey = 'user';

  /** -------------------------------------------------
   *  Restore user on initial load
   *  ------------------------------------------------*/
  useEffect(() => {
    const storedToken = localStorage.getItem(accessKey);
    const storedUser = localStorage.getItem(userKey);

    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }
    setLoading(false);
  }, []);

  /** -------------------------------------------------
   *  Login
   *  ------------------------------------------------*/
  const login = useCallback(async ({ email, password }) => {
    try {
      const { data, status } = await axiosInstance.post('/auth/login', {
        email,
        password,
      });

      if (status === 200 && data.token) {
        localStorage.setItem(accessKey, data.token.accessToken);
        localStorage.setItem(refreshKey, data.token.refreshToken);
        localStorage.setItem(userKey, JSON.stringify(data.user));

        axiosInstance.defaults.headers.common.Authorization =
          `Bearer ${data.token.accessToken}`;

        setUser(data.user);
        return { ok: true };
      }
      return { ok: false, message: 'Unexpected response' };
    } catch (err) {
      const parsed = parseAxiosError(err);
      
      console.log('parsed',parsed);         

      if (parsed.kind === 'api') {
        return { ok: false, message: parsed.data?.message || 'Server error',status:parsed.status };
      }

       return { ok: false, message: parsed.message };

    }
  }, []);

  /** -------------------------------------------------
   *  Logout
   *  ------------------------------------------------*/
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
