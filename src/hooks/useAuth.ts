import { useState } from "react";
import { User } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user;

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Implement actual authentication
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser({
        id: "1",
        email,
        name: "Test User",
        createdAt: new Date().toISOString(),
        preferences: {
          currency: "USD",
          language: "en",
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
      setError(err instanceof Error ? err.message : "Login failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Implement actual logout
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUser(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Logout failed");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
  };
}
