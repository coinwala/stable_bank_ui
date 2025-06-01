export const CONFIG = {
  // API Configuration
  API_BASE_URL: __DEV__
    ? "http://localhost:3000/api"
    : "https://api.cryptopop.app",

  // Blockchain Networks
  NETWORKS: {
    ETHEREUM: {
      name: "Ethereum",
      chainId: 1,
      rpcUrl: "https://mainnet.infura.io/v3/YOUR_PROJECT_ID",
      symbol: "ETH",
    },
    POLYGON: {
      name: "Polygon",
      chainId: 137,
      rpcUrl: "https://polygon-rpc.com",
      symbol: "MATIC",
    },
    BSC: {
      name: "BSC",
      chainId: 56,
      rpcUrl: "https://bsc-dataseed1.binance.org",
      symbol: "BNB",
    },
  },

  // Feature Flags
  FEATURES: {
    BIOMETRIC_AUTH: true,
    PUSH_NOTIFICATIONS: true,
    DARK_MODE_ONLY: true,
    STAKING: true,
    NFT_SUPPORT: false,
    DEFI_PROTOCOLS: true,
  },

  // Security Settings
  SECURITY: {
    BIOMETRIC_TIMEOUT: 5 * 60 * 1000, // 5 minutes
    SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
    MAX_LOGIN_ATTEMPTS: 5,
    LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  },

  // Trading Configuration
  TRADING: {
    DEFAULT_SLIPPAGE: 0.5, // 0.5%
    MAX_SLIPPAGE: 5.0, // 5%
    MIN_TRADE_AMOUNT: 0.001, // ETH
    MAX_TRADE_AMOUNT: 100, // ETH
  },

  // UI Configuration
  UI: {
    ANIMATION_DURATION: 200,
    CHART_REFRESH_INTERVAL: 30000, // 30 seconds
    PRICE_REFRESH_INTERVAL: 10000, // 10 seconds
    HAPTIC_FEEDBACK: true,
  },

  // Storage Keys
  STORAGE_KEYS: {
    AUTH_TOKEN: "auth_token",
    REFRESH_TOKEN: "refresh_token",
    USER_PREFERENCES: "user_preferences",
    WALLET_DATA: "wallet_data",
    BIOMETRIC_ENABLED: "biometric_enabled",
  },
} as const;
