export interface WalletAccount {
  address: string;
  balance: string;
  network: string;
  isConnected: boolean;
  type: "imported" | "generated";
}

export interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  timestamp: number;
  status: "pending" | "confirmed" | "failed";
  type: "send" | "receive" | "swap" | "stake";
  token?: {
    symbol: string;
    name: string;
    decimals: number;
    address: string;
  };
}

export interface Portfolio {
  totalValue: number;
  totalChange24h: number;
  totalChangePercentage24h: number;
  holdings: PortfolioHolding[];
}

export interface PortfolioHolding {
  cryptoId: string;
  symbol: string;
  name: string;
  amount: number;
  value: number;
  change24h: number;
  changePercentage24h: number;
  allocation: number; // percentage of total portfolio
}
