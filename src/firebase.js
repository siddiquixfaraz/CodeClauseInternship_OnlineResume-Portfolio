import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJvS6SR0TMIcBoTTJTVP3bDbQa20zlSMY",
  authDomain: "react-portfolio-10898.firebaseapp.com",
  projectId: "react-portfolio-10898",
  storageBucket: "react-portfolio-10898.appspot.com",
  messagingSenderId: "731743299987",
  appId: "1:731743299987:web:b01a4574ece572f72c2066"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();