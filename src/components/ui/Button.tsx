import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Typography, Spacing } from "@/constants";
import { useTheme } from "@/providers/ThemeProvider";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}: ButtonProps) {
  const { colors } = useTheme();

  const buttonStyles = [
    styles.base,
    {
      ...styles[variant],
      backgroundColor: variant === "primary" ? colors.primary : 
                     variant === "secondary" ? colors.backgroundSecondary :
                     "transparent",
      borderColor: variant === "outline" ? colors.border : "transparent",
    },
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    style,
  ];

  const titleStyles = [
    styles.text,
    {
      ...styles[`${variant}Text`],
      color: variant === "primary" ? "white" :
             variant === "secondary" ? colors.text :
             variant === "outline" ? colors.primary :
             colors.primary,
    },
    styles[`${size}Text`],
    disabled && { color: colors.textMuted },
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "white" : colors.primary}
        />
      ) : (
        <Text style={titleStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  primary: {
    // backgroundColor will be set dynamically
  },
  secondary: {
    // backgroundColor will be set dynamically
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    // borderColor will be set dynamically
  },
  ghost: {
    backgroundColor: "transparent",
  },
  small: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    minHeight: 36,
  },
  medium: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    minHeight: 48,
  },
  large: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    minHeight: 56,
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontFamily: Typography.fontFamily.semiBold,
    textAlign: "center",
  },
  primaryText: {
    // color will be set dynamically
  },
  secondaryText: {
    // color will be set dynamically
  },
  outlineText: {
    // color will be set dynamically
  },
  ghostText: {
    // color will be set dynamically
  },
  smallText: {
    fontSize: Typography.fontSize.sm,
  },
  mediumText: {
    fontSize: Typography.fontSize.md,
  },
  largeText: {
    fontSize: Typography.fontSize.lg,
  },
  disabledText: {
    // color will be set dynamically
  },
});
