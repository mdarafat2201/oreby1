import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvuVopStvbdTCalw_2i8LxF5FU3Z2g7Ec",
  authDomain: "oreby-fonten.firebaseapp.com",
  projectId: "oreby-fonten",
  storageBucket: "oreby-fonten.appspot.com",
  messagingSenderId: "511426083902",
  appId: "1:511426083902:web:66b0dfca5f548c23b5a56f",
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(Firebaseapp);

export default Firebaseapp;
