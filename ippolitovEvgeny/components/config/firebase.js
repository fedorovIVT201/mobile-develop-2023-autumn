import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA20AoMMWdShkVv2p2lqGyXbRiADZEYyIk",
  authDomain: "reactapp-c8640.firebaseapp.com",
  projectId: "reactapp-c8640",
  storageBucket: "reactapp-c8640.appspot.com",
  messagingSenderId: "496140682670",
  appId: "1:496140682670:web:a419d601b9b78d00ae743f",
  measurementId: "G-YHEDHTS2TF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
