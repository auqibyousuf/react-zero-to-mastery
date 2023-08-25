import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpdG3zpCQFk741Hwy217hCC2-EOF6bPkI",
  authDomain: "crwn-clothing-db-fb.firebaseapp.com",
  projectId: "crwn-clothing-db-fb",
  storageBucket: "crwn-clothing-db-fb.appspot.com",
  messagingSenderId: "1045053557868",
  appId: "1:1045053557868:web:614dc7999f610a460c5c49",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account", // instead of prompt=none
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
