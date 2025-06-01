export interface User {
  id: string;
  email: string;
  name: string;
  username?: string;
  avatar?: string;
  createdAt: string;
  preferences: UserPreferences;
  security: SecuritySettings;
}

export interface UserPreferences {
  currency: string;
  language: string;
  notifications: NotificationSettings;
  trading: TradingPreferences;
}

export interface NotificationSettings {
  pushEnabled: boolean;
  emailEnabled: boolean;
  priceAlerts: boolean;
  transactionUpdates: boolean;
  marketNews: boolean;
}

export interface TradingPreferences {
  defaultSlippage: number;
  confirmTransactions: boolean;
  showAdvancedOptions: boolean;
}

export interface SecuritySettings {
  biometricEnabled: boolean;
  twoFactorEnabled: boolean;
  autoLockDuration: number;
  requirePasswordForTransactions: boolean;
}
