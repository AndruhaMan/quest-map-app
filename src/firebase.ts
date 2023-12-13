import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { MarkerType } from "./types/MarkerType";

const firebaseConfig = {
  apiKey: "AIzaSyA-5epEC3XO2pxGHrd7GqHSmLlTxVMr6nQ",
  authDomain: "quest-map-app-9dbd0.firebaseapp.com",
  projectId: "quest-map-app-9dbd0",
  storageBucket: "quest-map-app-9dbd0.appspot.com",
  messagingSenderId: "256623565971",
  appId: "1:256623565971:web:a0d270bce7f4f60aae8166",
  measurementId: "G-Y34QE6F3KB"
};
initializeApp(firebaseConfig);

const firestore = getFirestore();
const quests = doc(firestore, 'quests/quests')

export const writeToDB = async (markers: MarkerType | null) => {
  if (!markers) {
    deleteDoc(quests)
  } else {
    setDoc(quests, markers);
  }
}

export const getFromDB = async () => {
  const questsQuery = query(collection(firestore, 'quests'));
  const querySnapshot = await getDocs(questsQuery);

  return querySnapshot.docs[0]?.data() as MarkerType || null;
}