// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl-2vteTob85s3Imy9H2NoAAL5a8iP758",
  authDomain: "applelogin-72eb6.firebaseapp.com",
  projectId: "applelogin-72eb6",
  storageBucket: "applelogin-72eb6.appspot.com", // Fixed the storageBucket URL
  messagingSenderId: "475283670196",
  appId: "1:475283670196:web:df44e36775162cb53b03e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app); // Pass the app instance here
export default app;
