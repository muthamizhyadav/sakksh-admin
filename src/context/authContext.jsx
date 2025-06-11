import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUserData = async (token) => {
        try {
            // Simulate API call
            // const response = await fetch('/api/user', { headers: { Authorization: token } });
            // const userData = await response.json();
            const userData = { id: 1, name: 'Admin', email: 'admin@example.com', role: 'admin' };
            setUser(userData);
        } catch (error) {
            console.error('Failed to fetch user data', error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            // Simulate API call
            // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) });
            // const { token, user } = await response.json();
            const token = 'fake-jwt-token';
            const user = { id: 1, name: 'Admin', email: 'admin@example.com', role: 'admin' };
            localStorage.setItem('token', token);
            setUser(user);
            return true;
        } catch (error) {
            console.error('Login failed', error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};