import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6nUQ4sU6YGjp2wt7XpAdAVUcTN46AxrM",
  authDomain: "authentication-88168.firebaseapp.com",
  projectId: "authentication-88168",
  storageBucket: "authentication-88168.appspot.com",
  messagingSenderId: "230826424713",
  appId: "1:230826424713:web:219796da1aa743e1bc4958"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
