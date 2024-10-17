import React from "react";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const TutorialButton = () => {
  return (
    <GestureHandlerRootView
      style={{ position: "absolute", top: 52, right: 16 }}
    >
      <TouchableOpacity
        onPress={() => {
          alert("Tutorial");
        }}
      >
        <Ionicons name="help-circle-sharp" size={52} color="white" />
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default TutorialButton;
