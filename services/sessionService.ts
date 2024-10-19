import {
  collection,
  addDoc,
  getDoc,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path to your config file
import { generateRoomId } from "@/utils/generateRoomId";

const createRoom = async ({ nickname }: { nickname: string }) => {
  try {
    // Create player object with proper structure
    const player = {
      id: Date.now().toString(), // Generate a temporary ID
      nickname: nickname,
    };
    const newRoomId = generateRoomId();
    // Create room with properly structured player array
    const roomRef = await setDoc(doc(db, "rooms", newRoomId), {
      createdAt: new Date().toISOString(),
      players: [player], // Store complete player objects
      owner: nickname,
    });

    console.log("Room created:", roomRef);
    return { roomId: newRoomId, player: player };
  } catch (e) {
    console.error("Error creating room: ", e);
    throw e;
  }
};

const joinRoom = async ({
  roomId,
  nickname,
}: {
  roomId: string;
  nickname: string;
}) => {
  try {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnapshot = await getDoc(roomRef);

    if (!roomSnapshot.exists()) {
      throw new Error("Room not found");
    }

    const roomData = roomSnapshot.data();

    if (!roomData) {
      throw new Error("Room data is empty");
    }

    // Create player object with proper structure
    const player = {
      id: Date.now().toString(), // Generate a temporary ID
      nickname: nickname,
    };

    await updateDoc(roomRef, {
      players: [...roomData.players, player],
    });

    console.log("Player joined room:", roomId);
    return player;
  } catch (e) {
    console.error("Error joining room: ", e);
    throw e;
  }
};

const getRoomInfo = (
  roomId: string,
  onUpdate: (data: any) => void,
  onError: (error: Error) => void
) => {
  if (!roomId) {
    onError(new Error("Room ID is required"));
    return;
  }

  const roomRef = doc(db, "rooms", roomId);

  // Return the unsubscribe function
  return onSnapshot(
    roomRef,
    (snapshot) => {
      if (!snapshot.exists()) {
        onError(new Error("Room not found"));
        return;
      }
      onUpdate(snapshot.data());
    },
    (error) => {
      console.error("Error getting room info: ", error);
      onError(error);
    }
  );
};

const leaveRoom = async ({
  roomId,
  playerId,
}: {
  roomId: string;
  playerId: string;
}) => {
  try {
    const roomRef = doc(db, "rooms", roomId);
    const roomSnapshot = await getDoc(roomRef);

    if (!roomSnapshot.exists()) {
      throw new Error("Room not found");
    }

    const roomData = roomSnapshot.data();

    if (!roomData) {
      throw new Error("Room data is empty");
    }

    const updatedPlayers = roomData.players.filter(
      (player: any) => player.id !== playerId
    );

    await updateDoc(roomRef, {
      players: updatedPlayers,
    });

    console.log("Player left room:", roomId);
    return true;
  } catch (e) {
    console.error("Error leaving room: ", e);
    throw e;
  }
};

const deleteRoom = async (roomId: string) => {
  try {
    await deleteDoc(doc(db, "rooms", roomId));
    console.log("Room deleted:", roomId);
    return true;
  } catch (e) {
    console.error("Error deleting room: ", e);
    throw e;
  }
};

export { createRoom, joinRoom, getRoomInfo, leaveRoom, deleteRoom };
