import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1mW3py-wHDtCbbpqoZC4aM6SLsK3RDiI",
  authDomain: "twclone1-c16bc.firebaseapp.com",
  projectId: "twclone1-c16bc",
  storageBucket: "twclone1-c16bc.appspot.com",
  messagingSenderId: "49286892309",
  appId: "1:49286892309:web:a81b2286256677d44ff71c",
  measurementId: "G-KFMVE47M20"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore  = getFirestore(app);
