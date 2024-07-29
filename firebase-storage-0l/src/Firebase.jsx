// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBCvJH1tILtSsimeZ6cTDgKqPZARzK55rk",
  authDomain: "myproject-a4873.firebaseapp.com",
  databaseURL: "https://myproject-a4873-default-rtdb.firebaseio.com",
  projectId: "myproject-a4873",
  storageBucket: "myproject-a4873.appspot.com",
  messagingSenderId: "94885953128",
  appId: "1:94885953128:web:772cdccba076d7151945dd",
  measurementId: "G-PC7JVCEQ64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  

export {database}