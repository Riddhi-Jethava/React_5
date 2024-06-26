import { getAuth, FacebookAuthProvider,  GoogleAuthProvider } from "firebase/app";
import { initializeApp } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCvJH1tILtSsimeZ6cTDgKqPZARzK55rk",
  authDomain: "myproject-a4873.firebaseapp.com",
  projectId: "myproject-a4873",
  storageBucket: "myproject-a4873.appspot.com",
  messagingSenderId: "94885953128",
  appId: "1:94885953128:web:772cdccba076d7151945dd",
  measurementId: "G-PC7JVCEQ64"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const facebookprovider = new FacebookAuthProvider()
const googleauthprovider = new GoogleAuthProvider()

export {auth, FacebookAuthProvider, GoogleAuthProvider}