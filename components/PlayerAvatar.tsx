import { Player } from "@/types/entity-types";
import { truncate } from "@/utils/truncate";
import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";
import TextTicker from "react-native-text-ticker";

interface PlayerAvatarProps {
  item: Player;
  playerId: string;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ item, playerId }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.playerItem}>
      <Ionicons
        name="skull-sharp"
        size={90}
        color={
          item.id === playerId
            ? isDarkMode
              ? "#FFE0B2"
              : "#CF6679"
            : "#FFFFFF"
        }
      />
      <TextTicker
        style={
          item.id === playerId
            ? {
                ...styles.playerName,
                color: isDarkMode ? "#FFE0B2" : "#CF6679",
              }
            : styles.playerName
        }
        duration={5000}
        loop
        bounce
        repeatSpacer={5}
        marqueeDelay={2000}
      >
        {item.nickname || "İsimsiz Oyuncu"}
      </TextTicker>
      <TextTicker
        style={{
          color:
            item.id === playerId
              ? isDarkMode
                ? "#FFE0B2"
                : "#CF6679"
              : "#FFFFFF",
          fontSize: 16,
          fontFamily: "Quicksand",
        }}
        duration={5000}
        loop
        bounce
        repeatSpacer={5}
        marqueeDelay={2000}
      >
        {item.id === playerId ? "Sen " : "Oyuncu "}
        {item.isOwner && "(Oda Sahibi)"}
      </TextTicker>
    </View>
  );
};

const styles = {
  playerItem: {
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    width: "50%" as "50%",
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerName: {
    fontSize: 28,
    fontWeight: "bold" as "bold",
    fontFamily: "Baloo",
    textAlign: "center" as "center",
  },
};

export default PlayerAvatar;
