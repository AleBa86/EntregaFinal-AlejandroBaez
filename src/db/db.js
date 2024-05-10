import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4urzUP2Q9OT7swvqo21mFUthf8kO5L-A",
  authDomain: "bluetech-4b7b5.firebaseapp.com",
  projectId: "bluetech-4b7b5",
  storageBucket: "bluetech-4b7b5.appspot.com",
  messagingSenderId: "972281975699",
  appId: "1:972281975699:web:a75485e274f8258552ce66"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db