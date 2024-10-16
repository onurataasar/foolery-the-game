import { HelloWave } from "@/components/HelloWave";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center h-full w-full space-y-20 text-white">
      <Text className="text-secondary-500 text-3xl font-baloo">
        this is Baloo 2 abcdefghijklmnopqrstuvwxyz0123456789 (not working)
      </Text>
      <Text className="text-lg text-primary-100 font-quick">
        This is Quicksand
      </Text>
      <Text
        style={{ fontFamily: "Baloo2" }}
        className="text-3xl text-primary-300"
      >
        this is Baloo 2 abcdefghijklmnopqrstuvwxyz0123456789 (working)
      </Text>
    </View>
  );
}
