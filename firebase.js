import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDXqFZmEZkuofzZIqFlYHvH85xybZNgeDQ",
  authDomain: "facebook-clone-422bb.firebaseapp.com",
  projectId: "facebook-clone-422bb",
  storageBucket: "facebook-clone-422bb.appspot.com",
  messagingSenderId: "838359184888",
  appId: "1:838359184888:web:4fac1dd2d330b663f5120d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)