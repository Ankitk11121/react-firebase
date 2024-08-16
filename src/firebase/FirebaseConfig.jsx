// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//..add my self this line..
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdmQ6Vh3f0u0P6AsnWDqsIZULrGzJS7iw",
  authDomain: "simple-auth-6537d.firebaseapp.com",
  projectId: "simple-auth-6537d",
  storageBucket: "simple-auth-6537d.appspot.com",
  messagingSenderId: "1082848989264",
  appId: "1:1082848989264:web:46fbe91af59650bfac0155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//..add my self this line..for use this auth variable in other file we export
export const auth = getAuth(app)