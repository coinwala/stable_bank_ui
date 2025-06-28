import { 
  BankAccount, 
  BankBalance, 
  Transaction, 
  SendMoneyRequest, 
  ReceiveMoneyRequest, 
  AddMoneyRequest, 
  ScanPayRequest 
} from '@/types/bank';

class BankService {
  private baseUrl = 'https://api.stablebank.com'; // Mock API URL

  // Get account balance and currency by mobile number
  async getAccountBalance(mobileNumber: string): Promise<BankBalance> {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response - in real app this would be an API call
    return {
      balance: 15420.50,
      currency: 'USDT',
      lastUpdated: new Date().toISOString()
    };
  }

  // Get account details
  async getAccountDetails(mobileNumber: string): Promise<BankAccount> {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: '1',
      userId: 'user_123',
      mobileNumber,
      balance: 15420.50,
      currency: 'USDT',
      accountNumber: 'SB' + Math.random().toString().slice(2, 12),
      accountType: 'savings',
      status: 'active',
      createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  // Get recent transactions
  async getRecentTransactions(mobileNumber: string, limit: number = 10): Promise<Transaction[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const mockTransactions: Transaction[] = [
      {
        id: '1',
        accountId: '1',
        type: 'receive',
        amount: 5000,
        currency: 'USDT',
        description: 'Payment from John Doe',
        recipientName: 'John Doe',
        recipientMobile: '+1234567890',
        status: 'completed',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        reference: 'TXN' + Math.random().toString().slice(2, 10)
      },
      {
        id: '2',
        accountId: '1',
        type: 'send',
        amount: 250,
        currency: 'USDT',
        description: 'Coffee shop payment',
        recipientName: 'Coffee Shop',
        recipientMobile: '+1987654321',
        status: 'completed',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        reference: 'TXN' + Math.random().toString().slice(2, 10)
      },
      {
        id: '3',
        accountId: '1',
        type: 'add',
        amount: 10000,
        currency: 'USDT',
        description: 'Bank transfer from main account',
        status: 'completed',
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        reference: 'TXN' + Math.random().toString().slice(2, 10)
      }
    ];
    
    return mockTransactions.slice(0, limit);
  }

  // Send money
  async sendMoney(request: SendMoneyRequest): Promise<Transaction> {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      accountId: '1',
      type: 'send',
      amount: request.amount,
      currency: 'USDT',
      description: request.description || 'Money sent',
      recipientMobile: request.recipientMobile,
      status: 'completed',
      createdAt: new Date().toISOString(),
      reference: 'TXN' + Math.random().toString().slice(2, 10)
    };
  }

  // Receive money
  async receiveMoney(request: ReceiveMoneyRequest): Promise<Transaction> {
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      accountId: '1',
      type: 'receive',
      amount: request.amount,
      currency: 'USDT',
      description: request.description || 'Money received',
      status: 'completed',
      createdAt: new Date().toISOString(),
      reference: 'TXN' + Math.random().toString().slice(2, 10)
    };
  }

  // Add money
  async addMoney(request: AddMoneyRequest): Promise<Transaction> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      accountId: '1',
      type: 'add',
      amount: request.amount,
      currency: 'USDT',
      description: `Added money via ${request.source}`,
      status: 'completed',
      createdAt: new Date().toISOString(),
      reference: 'TXN' + Math.random().toString().slice(2, 10)
    };
  }

  // Scan and pay
  async scanAndPay(request: ScanPayRequest): Promise<Transaction> {
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      accountId: '1',
      type: 'scan_pay',
      amount: request.amount,
      currency: 'USDT',
      description: request.description || 'QR code payment',
      status: 'completed',
      createdAt: new Date().toISOString(),
      reference: 'TXN' + Math.random().toString().slice(2, 10)
    };
  }

  // Update currency preference
  async updateCurrency(mobileNumber: string, currency: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 800));
    // Mock API call to update currency preference
    console.log(`Currency updated to ${currency} for ${mobileNumber}`);
  }
}

export const bankService = new BankService(); 