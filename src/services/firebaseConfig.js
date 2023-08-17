// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // connection to database

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGCIp217CErk4_j_lmJ4TSld1fFkf57h4",
  authDomain: "kamgremofinal.firebaseapp.com",
  projectId: "kamgremofinal",
  storageBucket: "kamgremofinal.appspot.com",
  messagingSenderId: "110780281602",
  appId: "1:110780281602:web:9a94caf8f6d1cb2a67481b",
  measurementId: "G-DL3L0WFMS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { signInWithEmailAndPassword };
const db = getFirestore(app); // connecting it to the app

export { db, auth, app };