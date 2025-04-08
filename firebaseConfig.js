// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration for Firestore
const firestoreConfig = {
  apiKey: "AIzaSyAyjR4_84ToOaQE5G7WbRDJmTXodpJ8HW8",
  authDomain: "vendor-apple.firebaseapp.com",
  projectId: "vendor-apple",
  storageBucket: "vendor-apple.firebasestorage.app",
  messagingSenderId: "137873935775",
  appId: "1:137873935775:web:c46aea203168c1fff141aa",
};

// Firebase configuration for Authentication
const authConfig = {
  apiKey: "AIzaSyAl-2vteTob85s3Imy9H2NoAAL5a8iP758",
  authDomain: "applelogin-72eb6.firebaseapp.com",
  projectId: "applelogin-72eb6",
  storageBucket: "applelogin-72eb6.appspot.com",
  messagingSenderId: "475283670196",
  appId: "1:475283670196:web:df44e36775162cb53b03e1",
};

// Initialize Firestore App (using a unique name)
const firestoreApp = initializeApp(firestoreConfig, "firestoreApp");

// Initialize Auth App (using a unique name)
const authApp = initializeApp(authConfig, "authApp");

// Initialize Firestore and Authentication
const db = getFirestore(firestoreApp);
const auth = getAuth(authApp);

// Export both instances
export { db, auth };
