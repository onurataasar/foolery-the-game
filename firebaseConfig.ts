// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZG-HPq0FxS9Uq4DaTxqYKk-HdFlyokcY",
  authDomain: "foolery-the-game.firebaseapp.com",
  projectId: "foolery-the-game",
  storageBucket: "foolery-the-game.appspot.com",
  messagingSenderId: "45989976749",
  appId: "1:45989976749:web:83e0d4974ead86ccccc424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
