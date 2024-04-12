import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDy4mBoY5ucI4sJlxQKVS7QySUysjUwE1E",
  authDomain: "nammart-7e1a5.firebaseapp.com",
  projectId: "nammart-7e1a5",
  storageBucket: "nammart-7e1a5.appspot.com",
  messagingSenderId: "216463946443",
  appId: "1:216463946443:web:70546f1cb27bdcb627a14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app