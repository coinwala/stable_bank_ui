import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Input } from "@/components/ui";
import { Colors, Typography, Spacing } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "@/hooks/useForm";

interface LoginForm {
  email: string;
  password: string;
}

export default function HomeScreen() {
  const { user, isAuthenticated, login, logout, isLoading, error } = useAuth();

  const loginForm = useForm<LoginForm>({
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const errors: Partial<Record<keyof LoginForm, string>> = {};
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        Alert.alert("Success", "Logged in successfully!");
      } catch (error) {
        Alert.alert("Error", "Login failed");
      }
    },
  });

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("Success", "Logged out successfully!");
    } catch (error) {
      Alert.alert("Error", "Logout failed");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>CryptoPOP</Text>
          <Text style={styles.subtitle}>Scalable Architecture Demo</Text>

          {/* Auth Status */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Authentication Status</Text>
            <Text style={styles.status}>
              {isAuthenticated ? "✅ Authenticated" : "❌ Not Authenticated"}
            </Text>
            {user && (
              <Text style={styles.userInfo}>Welcome, {user.email}!</Text>
            )}
            {error && <Text style={styles.errorText}>{error}</Text>}
          </Card>

          {/* Login Form */}
          {!isAuthenticated && (
            <Card style={styles.card}>
              <Text style={styles.cardTitle}>Login Test</Text>

              <Input
                label="Email"
                placeholder="test@example.com"
                value={loginForm.values.email}
                onChangeText={(text) => loginForm.setValue("email", text)}
                error={
                  loginForm.touched.email ? loginForm.errors.email : undefined
                }
                onBlur={() => loginForm.setFieldTouched("email")}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Input
                label="Password"
                placeholder="Enter password"
                value={loginForm.values.password}
                onChangeText={(text) => loginForm.setValue("password", text)}
                error={
                  loginForm.touched.password
                    ? loginForm.errors.password
                    : undefined
                }
                onBlur={() => loginForm.setFieldTouched("password")}
                secureTextEntry
              />

              <Button
                title={isLoading ? "Logging in..." : "Login"}
                onPress={loginForm.handleSubmit}
                loading={isLoading}
                disabled={!loginForm.isValid}
                style={{ marginTop: Spacing.md }}
              />

              <Text style={styles.hint}>
                Use any email/password to test the authentication flow
              </Text>
            </Card>
          )}

          {/* Logout */}
          {isAuthenticated && (
            <Card style={styles.card}>
              <Button title="Logout" variant="outline" onPress={handleLogout} />
            </Card>
          )}

          {/* Architecture Features */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Architecture Features</Text>
            <View style={styles.featureList}>
              <Text style={styles.feature}>✅ TypeScript with strict mode</Text>
              <Text style={styles.feature}>
                ✅ Zustand for state management
              </Text>
              <Text style={styles.feature}>
                ✅ React Query for data fetching
              </Text>
              <Text style={styles.feature}>✅ Expo Router for navigation</Text>
              <Text style={styles.feature}>
                ✅ Secure storage for sensitive data
              </Text>
              <Text style={styles.feature}>
                ✅ Custom hooks for business logic
              </Text>
              <Text style={styles.feature}>✅ Reusable UI components</Text>
              <Text style={styles.feature}>
                ✅ Modular service architecture
              </Text>
              <Text style={styles.feature}>✅ Form validation utilities</Text>
              <Text style={styles.feature}>✅ Centralized constants</Text>
            </View>
          </Card>

          {/* Next Steps */}
          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Next Steps</Text>
            <Text style={styles.body}>
              1. Connect to real crypto APIs{"\n"}
              2. Implement wallet functionality{"\n"}
              3. Add biometric authentication{"\n"}
              4. Create trading interface{"\n"}
              5. Add push notifications{"\n"}
              6. Implement offline support
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: Spacing.md,
  },
  title: {
    fontSize: Typography.fontSize.xxxl,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text,
    textAlign: "center",
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: Typography.fontSize.lg,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    textAlign: "center",
    marginBottom: Spacing.xl,
  },
  card: {
    marginBottom: Spacing.lg,
  },
  cardTitle: {
    fontSize: Typography.fontSize.lg,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  status: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  userInfo: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
  },
  errorText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.error,
    marginTop: Spacing.sm,
  },
  hint: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textMuted,
    textAlign: "center",
    marginTop: Spacing.md,
    fontStyle: "italic",
  },
  body: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    lineHeight: Typography.lineHeight.md,
  },
  featureList: {
    gap: Spacing.sm,
  },
  feature: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    lineHeight: Typography.lineHeight.sm,
  },
});
