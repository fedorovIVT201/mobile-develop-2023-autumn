// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxY2b2ToI2yQUd3nrpjCijYxkWl6E4_lU",
  authDomain: "firstproject-751eb.firebaseapp.com",
  projectId: "firstproject-751eb",
  storageBucket: "firstproject-751eb.appspot.com",
  messagingSenderId: "289266521304",
  appId: "1:289266521304:web:fe205f92d9ba73df92b3ad",
  measurementId: "G-JJR6FW0LRB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
