import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

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
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Game Code</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter the code..."
                keyboardType="numeric"
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.joinButton}>
                  <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>
              </View>
              {/* Add an invisible spacer at the bottom */}
              <View style={styles.spacer} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
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
    paddingBottom: 0, // Removed padding-bottom
    alignItems: "center",
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
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  closeButton: {
    backgroundColor: "#EF5350",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  joinButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalComponent;
