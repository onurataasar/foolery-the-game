import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -20 : 0} // Reduced offset on iOS
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {/* Close icon (X) on the top right */}
                <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                  <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Bir Odaya Katıl</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Rumuz</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Arkadaşlarınızın sizi tanıyabilmesi için bir rumuz girin"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Oda Kodu</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Oyuna başlamak için oda kodunu girin"
                    placeholderTextColor="#888"
                    keyboardType="numeric"
                  />
                </View>

                {/* Enlarged Join Button */}
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.buttonText}>Katıl</Text>
                </TouchableOpacity>

                {/* Invisible spacer for extra space */}
                <View style={styles.spacer} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "flex-start",
    gap: 10,
    position: "relative", // To position the X icon
  },
  closeIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  spacer: {
    height: 40, // Adds space at the bottom
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    fontSize: 18,
  },
  joinButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ModalComponent;
