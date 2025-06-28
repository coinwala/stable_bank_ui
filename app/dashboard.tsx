import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, LoadingSpinner } from "@/components/ui";
import { Typography, Spacing } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { useBank } from "@/hooks/useBank";
import { useTheme } from "@/providers/ThemeProvider";
import { bankService } from "@/services/bankService";
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  const { user, logout } = useAuth();
  const { colors, theme, toggleTheme } = useTheme();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Use the mobile number from user or default to demo number
  const mobileNumber = user?.email || "+1234567890";
  const { account, balance, transactions, isLoading, error, refreshBalance } = useBank(mobileNumber);

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("Success", "Logged out successfully!");
    } catch (error) {
      Alert.alert("Error", "Logout failed");
    }
  };

  const handleSendMoney = async () => {
    setIsProcessing(true);
    try {
      const amount = Math.floor(Math.random() * 1000) + 100; // Random amount between 100-1100
      await bankService.sendMoney({
        recipientMobile: "+9876543210",
        amount,
        description: "Demo transfer"
      });
      await refreshBalance();
      Alert.alert("Success", `Sent ${amount} ${balance?.currency || 'USDT'} successfully!`);
    } catch (error) {
      Alert.alert("Error", "Failed to send money");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReceiveMoney = async () => {
    setIsProcessing(true);
    try {
      const amount = Math.floor(Math.random() * 500) + 50; // Random amount between 50-550
      await bankService.receiveMoney({
        amount,
        description: "Demo payment"
      });
      await refreshBalance();
      Alert.alert("Success", `Received ${amount} ${balance?.currency || 'USDT'} successfully!`);
    } catch (error) {
      Alert.alert("Error", "Failed to receive money");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddMoney = async () => {
    setIsProcessing(true);
    try {
      const amount = Math.floor(Math.random() * 2000) + 500; // Random amount between 500-2500
      await bankService.addMoney({
        amount,
        source: "card"
      });
      await refreshBalance();
      Alert.alert("Success", `Added ${amount} ${balance?.currency || 'USDT'} successfully!`);
    } catch (error) {
      Alert.alert("Error", "Failed to add money");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleScanPay = async () => {
    setIsProcessing(true);
    try {
      const amount = Math.floor(Math.random() * 300) + 20; // Random amount between 20-320
      await bankService.scanAndPay({
        qrCode: "demo_qr_code_123",
        amount,
        description: "QR payment"
      });
      await refreshBalance();
      Alert.alert("Success", `Paid ${amount} ${balance?.currency || 'USDT'} via QR!`);
    } catch (error) {
      Alert.alert("Error", "Failed to process QR payment");
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    return `${currency} ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send': return '📤';
      case 'receive': return '📥';
      case 'add': return '💰';
      case 'scan_pay': return '📱';
      default: return '💳';
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      padding: Spacing.md,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.lg,
    },
    headerText: {
      fontSize: Typography.fontSize.xl,
      fontFamily: Typography.fontFamily.bold,
      color: colors.text,
    },
    themeToggle: {
      padding: Spacing.sm,
      borderRadius: 8,
      backgroundColor: colors.backgroundSecondary,
    },
    balanceCard: {
      backgroundColor: colors.primary,
      borderRadius: 16,
      padding: Spacing.lg,
      marginBottom: Spacing.lg,
    },
    balanceLabel: {
      fontSize: Typography.fontSize.md,
      fontFamily: Typography.fontFamily.medium,
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: Spacing.sm,
    },
    balanceAmount: {
      fontSize: Typography.fontSize.xxxl,
      fontFamily: Typography.fontFamily.bold,
      color: 'white',
      marginBottom: Spacing.sm,
    },
    balanceCurrency: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontFamily.regular,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    actionsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: Spacing.lg,
    },
    actionButton: {
      width: '48%',
      marginBottom: Spacing.md,
    },
    card: {
      marginBottom: Spacing.lg,
    },
    cardTitle: {
      fontSize: Typography.fontSize.lg,
      fontFamily: Typography.fontFamily.semiBold,
      color: colors.text,
      marginBottom: Spacing.md,
    },
    transactionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    transactionIcon: {
      fontSize: 24,
      marginRight: Spacing.sm,
    },
    transactionContent: {
      flex: 1,
    },
    transactionTitle: {
      fontSize: Typography.fontSize.md,
      fontFamily: Typography.fontFamily.medium,
      color: colors.text,
    },
    transactionDate: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontFamily.regular,
      color: colors.textSecondary,
    },
    transactionAmount: {
      fontSize: Typography.fontSize.md,
      fontFamily: Typography.fontFamily.semiBold,
      color: colors.text,
    },
    logoutButton: {
      marginTop: Spacing.md,
    },
    errorText: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontFamily.regular,
      color: colors.error,
      textAlign: 'center',
      marginBottom: Spacing.md,
    },
  });

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LoadingSpinner size="large" />
          <Text style={{ marginTop: Spacing.md, color: colors.text }}>Loading account...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>StableBank</Text>
            <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
              <Ionicons
                name={theme === 'light' ? 'moon' : 'sunny'}
                size={24}
                color={theme === 'light' ? colors.text : colors.text}
              />
            </TouchableOpacity>
          </View>

          {/* Balance Card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Text style={styles.balanceAmount}>
              {balance ? formatCurrency(balance.balance, balance.currency) : 'Loading...'}
            </Text>
            <Text style={styles.balanceCurrency}>
              Last updated: {balance ? new Date(balance.lastUpdated).toLocaleTimeString() : '--'}
            </Text>
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}

          {/* Action Buttons */}
          <View style={styles.actionsGrid}>
            <Button
              title="Send Money"
              onPress={handleSendMoney}
              loading={isProcessing}
              style={styles.actionButton}
              variant="outline"
              icon={<Ionicons name="send" size={18} color={colors.text} style={{ marginRight: 8 }} />}
            />
            <Button
              title="Receive Money"
              onPress={handleReceiveMoney}
              loading={isProcessing}
              style={styles.actionButton}
              variant="outline"
              icon={<Ionicons name="download" size={18} color={colors.text} style={{ marginRight: 8 }} />}
            />
            <Button
              title="Add Money"
              onPress={handleAddMoney}
              loading={isProcessing}
              style={styles.actionButton}
              variant="outline"
              icon={<Ionicons name="add-circle" size={18} color={colors.text} style={{ marginRight: 8 }} />}
            />
            <Button
              title="Scan & Pay"
              onPress={handleScanPay}
              loading={isProcessing}
              style={styles.actionButton}
              variant="outline"
              icon={<Ionicons name="qr-code" size={18} color={colors.text} style={{ marginRight: 8 }} />}
            />
          </View>

          {/* Recent Transactions */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Recent Transactions</Text>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <View key={transaction.id} style={styles.transactionItem}>
                  <Text style={styles.transactionIcon}>
                    {getTransactionIcon(transaction.type)}
                  </Text>
                  <View style={styles.transactionContent}>
                    <Text style={styles.transactionTitle}>
                      {transaction.description}
                    </Text>
                    <Text style={styles.transactionDate}>
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </Text>
                  </View>
                  <Text style={styles.transactionAmount}>
                    {transaction.type === 'send' || transaction.type === 'scan_pay' ? '-' : '+'}
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={{ color: colors.textSecondary, textAlign: 'center', padding: Spacing.md }}>
                No transactions yet
              </Text>
            )}
          </Card>

          {/* Account Info */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Account Information</Text>
            <Text style={{ color: colors.textSecondary, marginBottom: Spacing.sm }}>
              Account: {account?.accountNumber || '--'}
            </Text>
            <Text style={{ color: colors.textSecondary, marginBottom: Spacing.sm }}>
              Mobile: {mobileNumber}
            </Text>
            <Text style={{ color: colors.textSecondary }}>
              Type: {account?.accountType || '--'}
            </Text>
          </Card>

          {/* Logout */}
          <Button
            title="Logout"
            onPress={handleLogout}
            variant="outline"
            style={styles.logoutButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 