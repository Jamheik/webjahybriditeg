
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAhl3RgjJiHvOdlMLWMMDqM2k_W2FajRcQ",
  authDomain: "shoppinglist-9a6f7.firebaseapp.com",
  projectId: "shoppinglist-9a6f7",
  storageBucket: "shoppinglist-9a6f7.firebasestorage.app",
  messagingSenderId: "563022186880",
  appId: "1:563022186880:web:4895cf8854ab08707f1965",
  measurementId: "G-MJSC54L13X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };