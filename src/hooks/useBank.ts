import { useState, useEffect } from 'react';
import { bankService } from '@/services/bankService';
import { BankAccount, BankBalance, Transaction } from '@/types/bank';

export function useBank(mobileNumber: string) {
  const [account, setAccount] = useState<BankAccount | null>(null);
  const [balance, setBalance] = useState<BankBalance | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAccountData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [accountData, balanceData, transactionsData] = await Promise.all([
        bankService.getAccountDetails(mobileNumber),
        bankService.getAccountBalance(mobileNumber),
        bankService.getRecentTransactions(mobileNumber, 10)
      ]);
      
      setAccount(accountData);
      setBalance(balanceData);
      setTransactions(transactionsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch account data');
    } finally {
      setIsLoading(false);
    }
  };

  const refreshBalance = async () => {
    try {
      const balanceData = await bankService.getAccountBalance(mobileNumber);
      setBalance(balanceData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh balance');
    }
  };

  const updateCurrency = async (currency: string) => {
    try {
      await bankService.updateCurrency(mobileNumber, currency);
      await refreshBalance();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update currency');
    }
  };

  useEffect(() => {
    if (mobileNumber) {
      fetchAccountData();
    }
  }, [mobileNumber]);

  return {
    account,
    balance,
    transactions,
    isLoading,
    error,
    refreshBalance,
    updateCurrency,
    fetchAccountData,
  };
} 