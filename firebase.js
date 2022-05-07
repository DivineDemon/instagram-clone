import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0MbZ9sOgquc6ckDh-D6YxpP2XTSdzsnQ",
  authDomain: "instagram-clone-2793d.firebaseapp.com",
  projectId: "instagram-clone-2793d",
  storageBucket: "instagram-clone-2793d.appspot.com",
  messagingSenderId: "1073016340961",
  appId: "1:1073016340961:web:b0608c854fc3ffb7af52a0",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
