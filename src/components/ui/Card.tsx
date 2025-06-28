import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Spacing } from "@/constants";
import { useTheme } from "@/providers/ThemeProvider";

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof Spacing;
  noPadding?: boolean;
}

export function Card({
  children,
  style,
  padding = "md",
  noPadding = false,
}: CardProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        !noPadding && { padding: Spacing[padding] },
        style
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
  },
});
