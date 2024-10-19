import React, { useState } from "react";
import FoolButton from "@/components/FoolButton";
import { Image, ImageBackground, Text, View } from "react-native";
import TutorialButton from "./components/TutorialButton";
import JoinRoomModal from "./components/modals/JoinRoomModal";
import CreateRoomModal from "./components/modals/CreateRoomModal";

export default function Index() {
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/gradient-bg.webp")}
        style={styles.image}
      >
        <TutorialButton />
        <Image
          source={require("../assets/images/logo.webp")}
          style={{ width: 250, height: 250 }}
          className="rounded-full"
        />
        <View
          style={{
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
            className="text-secondary-500 font-baloo"
          >
            1.. 2.. 3.. Foolery!
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
      </ImageBackground>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#4A97FF",
  },
  image: {
    flex: 1,
    width: "100%" as "100%",
    height: "100%" as "100%",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    resizeMode: "cover",
    justifyContent: "center" as "center",
  },
};
