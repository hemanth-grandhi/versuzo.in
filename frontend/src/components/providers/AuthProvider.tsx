"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { apiFetch, ApiError } from "@/lib/api/client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  verified: number;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<User>;
  register: (name: string, email: string, password: string) => Promise<User>;
  logout: () => void;
  clearError: () => void;
  verifyEmail: (token: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Restore user session on mount
  useEffect(() => {
    async function restoreSession() {
      try {
        const token = localStorage.getItem("versuzo_auth_token");
        if (token) {
          const data = await apiFetch<{ user: User }>("/api/v1/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data.user);
        }
      } catch (err: any) {
        console.error("Session restoration failed:", err.message);
        // Clear token if invalid
        localStorage.removeItem("versuzo_auth_token");
      } finally {
        setLoading(false);
      }
    }
    restoreSession();
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<{ token: string; user: User }>("/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("versuzo_auth_token", data.token);
      setUser(data.user);
      return data.user;
    } catch (err: any) {
      const errMsg = err instanceof ApiError ? err.message : "Failed to log in";
      setError(errMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<User> => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch<{ token: string; user: User }>("/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      localStorage.setItem("versuzo_auth_token", data.token);
      setUser(data.user);
      return data.user;
    } catch (err: any) {
      const errMsg = err instanceof ApiError ? err.message : "Registration failed";
      setError(errMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("versuzo_auth_token");
    setUser(null);
    setError(null);
  };

  const verifyEmail = async (token: string): Promise<void> => {
    setError(null);
    try {
      await apiFetch("/api/v1/auth/verify-email", {
        method: "POST",
        body: JSON.stringify({ token }),
      });
      // Update local verified state if same user is logged in
      if (user) {
        setUser({ ...user, verified: 1 });
      }
    } catch (err: any) {
      const errMsg = err instanceof ApiError ? err.message : "Verification failed";
      setError(errMsg);
      throw err;
    }
  };

  const forgotPassword = async (email: string): Promise<void> => {
    setError(null);
    try {
      await apiFetch("/api/v1/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
    } catch (err: any) {
      const errMsg = err instanceof ApiError ? err.message : "Failed to send reset link";
      setError(errMsg);
      throw err;
    }
  };

  const resetPassword = async (token: string, password: string): Promise<void> => {
    setError(null);
    try {
      await apiFetch("/api/v1/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, password }),
      });
    } catch (err: any) {
      const errMsg = err instanceof ApiError ? err.message : "Password reset failed";
      setError(errMsg);
      throw err;
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        clearError,
        verifyEmail,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
