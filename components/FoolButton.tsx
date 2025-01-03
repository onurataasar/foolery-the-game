import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Ionicons

interface FoolButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  iconPrefix?: keyof typeof Ionicons.glyphMap;
  iconSize?: number; // Icon size customization
  iconColor?: string; // Icon color customization
  disabled?: boolean;
}

const FoolButton: React.FC<FoolButtonProps> = ({
  onPress,
  children,
  className,
  variant = "primary",
  size = "medium",
  iconPrefix,
  iconSize = 24,
  iconColor = "white",
  disabled = false, // Handle disabled state
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={
        [
          styles.button,
          styles[variant],
          styles[size],
          disabled && styles.disabledButton, // Ensure only ViewStyle types are included
        ] as ViewStyle[]
      } // Type assertion to ViewStyle array
      className={className}
      accessibilityRole="button"
      accessibilityLabel={typeof children === "string" ? children : "button"}
    >
      <View style={styles.content}>
        {iconPrefix && (
          <Ionicons
            name={iconPrefix}
            size={iconSize} // Dynamic size
            color={iconColor} // Dynamic color
            style={styles.icon as TextStyle}
          />
        )}
        <Text
          style={[
            styles.text as TextStyle,
            styles[
              `text${size.charAt(0).toUpperCase() + size.slice(1)}` as
                | "textSmall"
                | "textMedium"
                | "textLarge"
                | keyof typeof styles
            ] as TextStyle,
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primary: {
    backgroundColor: "#FF9800",
  },
  secondary: {
    color: "#FAFBFD",
    backgroundColor: "#4A97FF",
  },
  disabledButton: {
    backgroundColor: "#D3D3D3", // Disabled button color
  },
  small: {
    padding: 5,
    width: 100, // Fixed width for small size
  },
  medium: {
    padding: 10,
    width: 150, // Fixed width for medium size
  },
  large: {
    paddingHorizontal: 48,
    paddingVertical: 15,
    width: 300, // Fixed width for large size
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontFamily: "Baloo",
    letterSpacing: 1.02,
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 24,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: -16,
  },
});

export default FoolButton;
