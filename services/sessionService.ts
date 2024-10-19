import {
  collection,
  addDoc,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path to your config file

const createRoom = async ({ nickname }: { nickname: string }) => {
  try {
    // Create player object with proper structure
    const player = {
      id: Date.now().toString(), // Generate a temporary ID
      nickname: nickname,
    };

    // Create room with properly structured player array
    const roomRef = await addDoc(collection(db, "rooms"), {
      createdAt: new Date().toISOString(),
      players: [player], // Store complete player objects
      owner: nickname,
    });

    console.log("Room created with ID:", roomRef.id);
    return roomRef.id;
  } catch (e) {
    console.error("Error creating room: ", e);
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
export { createRoom, getRoomInfo };
