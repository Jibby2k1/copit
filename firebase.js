// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Add this line
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIMe6wKeXMCHPAPGK-S3V7v7qq-ja_xlQ",
  authDomain: "copit-9e7c3.firebaseapp.com",
  databaseURL: "https://copit-9e7c3-default-rtdb.firebaseio.com",
  projectId: "copit-9e7c3",
  storageBucket: "copit-9e7c3.appspot.com",
  messagingSenderId: "75240090252",
  appId: "1:75240090252:web:e39bd5a20025b5b27ea9a9",
  measurementId: "G-BSCQD38NHT"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP); // Add this line