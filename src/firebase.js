import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-5epEC3XO2pxGHrd7GqHSmLlTxVMr6nQ",
  authDomain: "quest-map-app-9dbd0.firebaseapp.com",
  projectId: "quest-map-app-9dbd0",
  storageBucket: "quest-map-app-9dbd0.appspot.com",
  messagingSenderId: "256623565971",
  appId: "1:256623565971:web:a0d270bce7f4f60aae8166",
  measurementId: "G-Y34QE6F3KB"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();