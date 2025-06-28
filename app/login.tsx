import React from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Input } from "@/components/ui";
import { Typography, Spacing } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "@/hooks/useForm";
import { useTheme } from "@/providers/ThemeProvider";

interface LoginForm {
  mobileNumber: string;
  password: string;
}

export default function LoginScreen() {
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const { colors } = useTheme();

  const loginForm = useForm<LoginForm>({
    initialValues: { mobileNumber: "", password: "" },
    validate: (values) => {
      const errors: Partial<Record<keyof LoginForm, string>> = {};
      if (!values.mobileNumber) errors.mobileNumber = "Mobile number is required";
      if (!values.password) errors.password = "Password is required";
      if (values.mobileNumber && values.mobileNumber.length < 10) {
        errors.mobileNumber = "Please enter a valid mobile number";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log("Attempting login with:", values.mobileNumber);
        // For demo purposes, accept any mobile number with password "admin123"
        if (values.password === "admin123") {
          await login(values.mobileNumber, values.password);
        } else {
          Alert.alert("Error", "Invalid credentials. Use 'admin123' as password.");
        }
      } catch (error) {
        console.error("Login error:", error);
        Alert.alert("Error", "Login failed");
      }
    },
  });

  // Debug: Log authentication state
  React.useEffect(() => {
    console.log("Login screen - Authentication state:", isAuthenticated);
  }, [isAuthenticated]);

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
      justifyContent: 'center',
      minHeight: '100%',
    },
    logo: {
      fontSize: Typography.fontSize.xxxl,
      fontFamily: Typography.fontFamily.bold,
      color: colors.primary,
      textAlign: "center",
      marginBottom: Spacing.sm,
    },
    subtitle: {
      fontSize: Typography.fontSize.lg,
      fontFamily: Typography.fontFamily.regular,
      color: colors.textSecondary,
      textAlign: "center",
      marginBottom: Spacing.xl,
    },
    card: {
      marginBottom: Spacing.lg,
    },
    cardTitle: {
      fontSize: Typography.fontSize.lg,
      fontFamily: Typography.fontFamily.semiBold,
      color: colors.text,
      marginBottom: Spacing.md,
      textAlign: 'center',
    },
    hint: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontFamily.regular,
      color: colors.textMuted,
      textAlign: "center",
      marginTop: Spacing.md,
      fontStyle: "italic",
    },
    errorText: {
      fontSize: Typography.fontSize.sm,
      fontFamily: Typography.fontFamily.regular,
      color: colors.error,
      marginTop: Spacing.sm,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.content}>
          <Text style={styles.logo}>StableBank</Text>
          <Text style={styles.subtitle}>Secure Digital Banking</Text>

          <Card style={styles.card}>
            <Text style={styles.cardTitle}>Login to Your Account</Text>

            <Input
              label="Mobile Number"
              placeholder="Enter your mobile number"
              value={loginForm.values.mobileNumber}
              onChangeText={(text) => loginForm.setValue("mobileNumber", text)}
              error={
                loginForm.touched.mobileNumber ? loginForm.errors.mobileNumber : undefined
              }
              onBlur={() => loginForm.setFieldTouched("mobileNumber")}
              keyboardType="phone-pad"
              autoCapitalize="none"
            />

            <Input
              label="Password"
              placeholder="Enter your password"
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

            {error && <Text style={styles.errorText}>{error}</Text>}

            <Button
              title={isLoading ? "Logging in..." : "Login"}
              onPress={loginForm.handleSubmit}
              loading={isLoading}
              disabled={!loginForm.isValid}
              style={{ marginTop: Spacing.md }}
            />

            <Button
              title="Quick Test Login (admin123)"
              onPress={() => {
                loginForm.setValue("mobileNumber", "+1234567890");
                loginForm.setValue("password", "admin123");
                loginForm.handleSubmit();
              }}
              variant="outline"
              style={{ marginTop: Spacing.sm }}
            />

            <Text style={styles.hint}>
              Demo: Use any mobile number with password "admin123"
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 