// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBCvJH1tILtSsimeZ6cTDgKqPZARzK55rk",
  authDomain: "myproject-a4873.firebaseapp.com",
  projectId: "myproject-a4873",
  storageBucket: "myproject-a4873.appspot.com",
  messagingSenderId: "94885953128",
  appId: "1:94885953128:web:772cdccba076d7151945dd",
  measurementId: "G-PC7JVCEQ64"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);