import PlayerAvatar from "@/components/PlayerAvatar";
import SubmitButton from "@/components/SubmitButton";
import { ThemedText } from "@/components/ThemedText";
import { deleteRoom, getRoomInfo, leaveRoom } from "@/services/sessionService";
import { Player } from "@/types/entity-types";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

// Define your navigation types
type RootStackParamList = {
  PreGameRoom: {
    roomId: string;
    isOwner: boolean;
    nickname: string;
    playerId: string;
  };
  // ... other screens
};

type PreGameRoomRouteProp = RouteProp<RootStackParamList, "PreGameRoom">;

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PreGameRoom"
>;

const PreGameRoom: React.FC = () => {
  const route = useRoute<PreGameRoomRouteProp>();
  const { roomId, isOwner, nickname } = route.params;
  const navigation = useNavigation<NavigationProp>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!roomId) {
      setError("Oda ID'si bulunamadı");
      setIsLoading(false);
      return;
    }

    // Subscribe to room updates
    const unsubscribe = getRoomInfo(
      roomId,
      (roomData) => {
        if (roomData && Array.isArray(roomData.players)) {
          setPlayers(roomData.players);
        } else {
          setPlayers([]);
        }
        setError(null);
        setIsLoading(false);
      },
      (error) => {
        console.error("Room info error:", error);
        setError(error.message);
        setIsLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [roomId]);

  const handleLeaveRoom = async () => {
    if (!roomId || route.params.isOwner) {
      return;
    }
    try {
      const response = await leaveRoom({
        roomId,
        playerId: route.params.playerId,
      });
      if (response) {
        console.log("Player left room:", roomId);
        navigation.goBack();
      }
    } catch (error) {
      console.error("Error leaving room:", error);
    }
  };

  const handleDeleteRoom = async () => {
    if (!roomId || !route.params.isOwner) {
      return;
    }
    try {
      const response = await deleteRoom(roomId);
      if (response) {
        console.log("Room deleted:", roomId);
        navigation.goBack();
      }
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleGameStart = () => {
    // Implement your game start logic here
    console.log("Game starting...");
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => {
            setIsLoading(true);
            setError(null);
          }}
        >
          <Text style={styles.buttonText}>Tekrar Dene</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View className="flex flex-col gap-y-2 w-full items-center justify-center mb-10">
        <Text className="text-center font-quick text-text-500 dark:text-white text-lg font-bold">
          Oda Numarası:
        </Text>
        <Text className="text-4xl text-center text-primary-500 dark:text-primary-400">
          {roomId}
        </Text>
      </View>
      <Text style={styles.title}>Oyuncular ({players.length})</Text>

      <FlatList
        key={"playerList"}
        data={players}
        renderItem={({ item }) => (
          <PlayerAvatar item={item} playerId={route.params.playerId} />
        )}
        keyExtractor={(item) => item.id || item.nickname}
        style={styles.playerList}
        numColumns={2}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Henüz oyuncu yok</Text>
        )}
      />

      {isOwner && players.length > 0 ? (
        <SubmitButton
          onPress={handleGameStart}
          label="Oyunu Başlat"
          loading={false}
        />
      ) : (
        <ThemedText
          lightColor="#FFA000"
          darkColor="#FFD54F"
          style={{ textAlign: "center" }}
        >
          (Oda sahibinin oyunu başlatması bekleniyor...)
        </ThemedText>
      )}
      <SubmitButton
        variant="cancel"
        onPress={isOwner ? handleDeleteRoom : handleLeaveRoom}
        label={isOwner ? "Odayı Sil" : "Odadan Ayrıl"}
        loading={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Quicksand",
    textAlign: "center",
    color: "#FFE0B2",
  },

  playerList: {
    flex: 1,
  },
  playerItem: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: "#f0f0f0",
    borderWidth: 2,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerText: {
    fontSize: 18,
  },
  readyButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#f44336",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 20,
  },
});

export default PreGameRoom;
