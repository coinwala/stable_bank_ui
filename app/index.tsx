import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/providers/ThemeProvider";
import LoginScreen from "./login";
import DashboardScreen from "./dashboard";

export default function App() {
  const { isAuthenticated } = useAuth();
  const { colors } = useTheme();

  // Debug: Log authentication state changes
  React.useEffect(() => {
    console.log("App - Authentication state changed:", isAuthenticated);
  }, [isAuthenticated]);

  // Show login screen if not authenticated, otherwise show dashboard
  if (!isAuthenticated) {
    console.log("App - Rendering Login Screen");
    return <LoginScreen />;
  }

  console.log("App - Rendering Dashboard Screen");
  return <DashboardScreen />;
}
