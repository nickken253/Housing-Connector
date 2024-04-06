// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2SnU4UiyAqPN3cfNeSPZbeeHitpjFB5s",
  authDomain: "housing-connector.firebaseapp.com",
  projectId: "housing-connector",
  storageBucket: "housing-connector.appspot.com",
  messagingSenderId: "149700812807",
  appId: "1:149700812807:web:c94297694b5f3fa2de4aa2",
  measurementId: "G-ZVNQKGMP6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);