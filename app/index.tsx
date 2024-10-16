import FoolButton from "@/components/FoolButton";
import { HelloWave } from "@/components/HelloWave";
import { Ionicons } from "@expo/vector-icons";
import { Button, Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center h-full w-full bg-primary-500">
      <Image
        source={require("../assets/images/logo.webp")}
        style={{ width: 250, height: 250 }}
        className="rounded-full"
      />
      <View style={{ gap: 20 }} className="flex flex-col items-center mt-8">
        <Text className="text-4xl text-secondary-500">Welcome to Foolery!</Text>
        <Text
          style={{ fontFamily: "Baloo2", gap: 12 }}
          className="text-center text-xl text-text-500 px-6"
        >
          Rakibini kandır, en yüksek puanı al ve kazan!
        </Text>
      </View>
      <View style={{ gap: 16 }} className="flex flex-col items-center mt-6">
        <FoolButton
          variant="secondary"
          size="large"
          onPress={() => {
            alert("How to play?");
          }}
        >
          <Text>Nasıl Oynanır?</Text>
        </FoolButton>
        <FoolButton
          variant="primary"
          size="large"
          onPress={() => {
            alert("Create a Room!");
          }}
          iconPrefix="add-sharp"
        >
          <Text>Bir Oda Oluştur</Text>
        </FoolButton>
      </View>
    </View>
  );
}
