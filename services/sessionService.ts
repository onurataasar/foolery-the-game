import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path to your config file

const createRoom = async () => {
  try {
    const roomRef = await addDoc(collection(db, "rooms"), {
      createdAt: new Date().toISOString(),
      players: [],
      // You can add more fields as necessary, like roomCode, host, etc.
    });
    console.log("Room created with ID:", roomRef.id);
    return roomRef.id;
  } catch (e) {
    console.error("Error creating room: ", e);
    throw e;
  }
};

export { createRoom };
