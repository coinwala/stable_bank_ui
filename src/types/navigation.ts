export type RootStackParamList = {
  "(tabs)": undefined;
  "(auth)": undefined;
  "(modals)": {
    "transaction-details": { transactionId: string };
    "send-crypto": { cryptoId?: string };
    "receive-crypto": { cryptoId?: string };
  };
  "+not-found": undefined;
};

export type TabsParamList = {
  index: undefined;
  market: undefined;
  scan: undefined;
  wallet: undefined;
  profile: undefined;
};

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
  "forgot-password": undefined;
  "verify-email": { email: string };
};
