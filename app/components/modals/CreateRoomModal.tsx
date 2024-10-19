import SubmitButton from "@/components/SubmitButton";
import { createRoom } from "@/services/sessionService";
import { ModalComponentProps } from "@/types/component-types";
import { RootStackParamList } from "@/types/navigation-types";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PreGameRoom"
>; /*  */

const CreateRoomModal: React.FC<ModalComponentProps> = ({
  isVisible,
  onClose,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const [nickname, setNickname] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateRoom = async () => {
    if (!nickname.trim()) {
      Alert.alert("Lütfen bir rumuz girin.");
      return;
    }

    setIsCreating(true);

    try {
      const response = await createRoom({ nickname });

      if (!response.roomId) {
        throw new Error("Room ID is undefined");
      }

      // Close the modal first
      onClose();

      // Then navigate with a slight delay to ensure modal is closed
      setTimeout(() => {
        navigation.navigate("PreGameRoom", {
          roomId: response.roomId,
          isOwner: true,
          nickname: response.player.nickname,
          playerId: response.player.id,
        });
      }, 100);
    } catch (error) {
      console.error("Oda oluşturulurken bir hata meydana geldi: ", error);
      Alert.alert("Bir hata meydana geldi. Lütfen tekrar deneyin.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
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
                <Text style={styles.modalTitle}>Bir Oda Oluştur</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Rumuz</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Arkadaşlarınızın sizi tanıyabilmesi için bir rumuz girin"
                    placeholderTextColor="#888"
                    keyboardType="default"
                    maxLength={15}
                    value={nickname}
                    onChangeText={setNickname}
                  />
                </View>

                {/* Submit button */}
                <SubmitButton
                  onPress={handleCreateRoom}
                  loading={isCreating}
                  label="Oda Oluştur"
                />

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
});

export default CreateRoomModal;
