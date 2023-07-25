import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "gym-webisite.firebaseapp.com",
    projectId: "gym-webisite",
    storageBucket: "gym-webisite.appspot.com",
    messagingSenderId: "438490072626",
    appId: "1:438490072626:web:684fd76916bdc6175d1e2b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();