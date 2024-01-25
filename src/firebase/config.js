// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBz5i3UF0fQC6V0He3-DB-TZ7wez3u2g",
  authDomain: "amber-bd28f.firebaseapp.com",
  projectId: "amber-bd28f",
  storageBucket: "amber-bd28f.appspot.com",
  messagingSenderId: "284147764856",
  appId: "1:284147764856:web:9373c15298c2e2652b678d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);