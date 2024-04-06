// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const firestore = getFirestore(app)