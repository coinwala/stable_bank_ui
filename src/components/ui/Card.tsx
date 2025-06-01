import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Colors, Spacing } from "@/constants";

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
  return (
    <View
      style={[styles.card, !noPadding && { padding: Spacing[padding] }, style]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
