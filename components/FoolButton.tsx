import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using Ionicons, you can change this to any icon library you prefer

interface FoolButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  iconPrefix?: keyof typeof Ionicons.glyphMap; // New prop for icon prefix
}

const FoolButton: React.FC<FoolButtonProps> = ({
  onPress,
  children,
  className,
  variant = "primary",
  size = "medium",
  iconPrefix = "arrow-forward-sharp", // Destructure the new prop
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[variant], styles[size]]}
      className={className}
    >
      <View style={styles.content}>
        {iconPrefix && (
          <Ionicons
            name={iconPrefix}
            size={24}
            color="white"
            style={styles.icon}
          />
        )}
        <Text
          style={[
            styles.text,
            styles[
              `text${size.charAt(0).toUpperCase() + size.slice(1)}` as
                | "textSmall"
                | "textMedium"
                | "textLarge"
            ],
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
    borderRadius: 45,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primary: {
    backgroundColor: "#EF5350",
  },
  secondary: {
    backgroundColor: "#FF9800",
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
    fontWeight: "semibold",
    fontFamily: "Baloo",
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 28,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
});

export default FoolButton;
