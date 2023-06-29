// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLnbjote2-YMkaDu6U2YJoDdiaVrO_fYg",
  authDomain: "fir-project-75986.firebaseapp.com",
  projectId: "fir-project-75986",
  storageBucket: "fir-project-75986.appspot.com",
  messagingSenderId: "1070239433327",
  appId: "1:1070239433327:web:61c22dad3088f781e1439a",
  measurementId: "G-TMKPYMP25R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app)