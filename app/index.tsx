import React, { useState } from "react";
import FoolButton from "@/components/FoolButton";
import { Image, Text, View } from "react-native";
import TutorialButton from "./components/TutorialButton";
import JoinRoomModal from "./components/modals/JoinRoomModal";
import CreateRoomModal from "./components/modals/CreateRoomModal";

export default function Index() {
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  return (
    <View className="flex items-center justify-center h-full w-full bg-primary-500">
      <TutorialButton />
      <Image
        source={require("../assets/images/logo.webp")}
        style={{ width: 250, height: 250 }}
        className="rounded-full"
      />
      <View style={{ gap: 20 }} className="flex flex-col items-center my-8">
        <Text className="text-4xl text-secondary-500">
          Foolery'e Hoşgeldin!
        </Text>
      </View>
      <View style={{ gap: 16 }} className="flex flex-col items-center mt-6">
        <FoolButton
          variant="primary"
          size="large"
          onPress={() => {
            setCreateModalVisible(true);
          }}
          iconPrefix="add-sharp"
        >
          <Text>Bir Oda Oluştur</Text>
        </FoolButton>

        {/* Trigger Modal */}
        <FoolButton
          variant="secondary"
          size="large"
          onPress={() => setJoinModalVisible(true)}
          iconPrefix="enter-outline"
        >
          <Text>Arkadaşına Katıl</Text>
        </FoolButton>
      </View>

      {/* Join Room Modal */}
      <JoinRoomModal
        isVisible={joinModalVisible}
        onClose={() => setJoinModalVisible(false)}
      />

      {/* Create Room Modal */}
      <CreateRoomModal
        isVisible={createModalVisible}
        onClose={() => setCreateModalVisible(false)}
      />
    </View>
  );
}
