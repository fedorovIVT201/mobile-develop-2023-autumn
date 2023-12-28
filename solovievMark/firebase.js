// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWPTd_nS2i9W0Z5fSa94X0Da8cWqgmWQQ",
  authDomain: "auth-4e688.firebaseapp.com",
  databaseURL:
    "https://auth-4e688-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-4e688",
  storageBucket: "auth-4e688.appspot.com",
  messagingSenderId: "175241042400",
  appId: "1:175241042400:web:a835198ca7bb4bf3e13385",
  measurementId: "G-WWFJ1THYV3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
