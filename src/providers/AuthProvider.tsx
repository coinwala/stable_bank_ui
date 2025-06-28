import React, { createContext, useContext, useState, useCallback } from 'react';
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (mobileNumber: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user;

  const login = useCallback(async (mobileNumber: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Mock authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: '1',
        email: mobileNumber,
        name: 'Demo User',
        createdAt: new Date().toISOString(),
        preferences: {
          currency: 'USDT',
          language: 'en',
          notifications: {
            pushEnabled: true,
            emailEnabled: true,
            priceAlerts: true,
            transactionUpdates: true,
            marketNews: true,
          },
          trading: {
            defaultSlippage: 0.5,
            confirmTransactions: true,
            showAdvancedOptions: false,
          },
        },
        security: {
          biometricEnabled: false,
          twoFactorEnabled: false,
          autoLockDuration: 5,
          requirePasswordForTransactions: true,
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logout failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 