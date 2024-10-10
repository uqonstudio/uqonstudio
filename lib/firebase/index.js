// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2xg7Q0RP_pzzuzXOKeZ_ROWXdLMpQ7Do",
  authDomain: "uqonstudio.firebaseapp.com",
  projectId: "uqonstudio",
  storageBucket: "uqonstudio.appspot.com",
  messagingSenderId: "209198511233",
  aappId: "1:209198511233:web:518bdf097fa06eeffa4980",
  measurementId: "G-5Q1QSQGXZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
