// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI9qfHCrHLJ4bIjFm-IY_y4QmeoA9HvEI",
  authDomain: "hiteshfullstackdev.firebaseapp.com",
  databaseURL:
    "https://hiteshfullstackdev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hiteshfullstackdev",
  storageBucket: "hiteshfullstackdev.firebasestorage.app",
  messagingSenderId: "307693935583",
  appId: "1:307693935583:web:1508c70bc2438a4661026a",
  measurementId: "G-B9R9ZS8N74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Export the necessary Firebase services
export { app, analytics, database };
