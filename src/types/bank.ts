export interface BankAccount {
  id: string;
  userId: string;
  mobileNumber: string;
  balance: number;
  currency: string;
  accountNumber: string;
  accountType: 'savings' | 'checking' | 'business';
  status: 'active' | 'suspended' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: 'send' | 'receive' | 'add' | 'scan_pay';
  amount: number;
  currency: string;
  description: string;
  recipientName?: string;
  recipientMobile?: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  reference: string;
}

export interface BankBalance {
  balance: number;
  currency: string;
  lastUpdated: string;
}

export interface SendMoneyRequest {
  recipientMobile: string;
  amount: number;
  description?: string;
}

export interface ReceiveMoneyRequest {
  amount: number;
  description?: string;
}

export interface AddMoneyRequest {
  amount: number;
  source: 'card' | 'bank_transfer' | 'upi';
  sourceDetails?: string;
}

export interface ScanPayRequest {
  qrCode: string;
  amount: number;
  description?: string;
} 