// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0FTN--v4PafSoswkj-4IB39EtFq4ic_0",
  authDomain: "myportfolio-b36da.firebaseapp.com",
  projectId: "myportfolio-b36da",
  storageBucket: "myportfolio-b36da.firebasestorage.app",
  messagingSenderId: "272641140958",
  appId: "1:272641140958:web:14e46d40e1c29a2264fa4f",
  measurementId: "G-2GK88E69W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app);
