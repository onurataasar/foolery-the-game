// SubmitButton.tsx
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
  loading: boolean;
  label: string;
  variant?: "submit" | "cancel";
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  loading,
  label,
  variant = "submit",
}) => {
  return (
    <TouchableOpacity
      style={
        loading
          ? styles.disabledButton
          : variant === "cancel"
          ? styles.cancelButton
          : styles.button
      }
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#E74C3C",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Baloo",
  },
});

export default SubmitButton;
