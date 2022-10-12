// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "hasbro-3af86.firebaseapp.com",
  projectId: "hasbro-3af86",
  storageBucket: "hasbro-3af86.appspot.com",
  messagingSenderId: "494502050915",
  appId: process.env.REACT_APP_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;