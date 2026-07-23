// ======================================
// FIFA TV - Firebase Authentication
// script.js
// ======================================


import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {
    getAnalytics
} from "firebase/analytics";



// ======================================
// Firebase config depuis Vercel / .env
// ======================================


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0wGD-T7bzHGuSu7qxw7qEe-tExpqz0p4",
  authDomain: "fifa-tv-database.firebaseapp.com",
  projectId: "fifa-tv-database",
  storageBucket: "fifa-tv-database.firebasestorage.app",
  messagingSenderId: "916734081043",
  appId: "1:916734081043:web:13a741a8747ace5d3ee7e6",
  measurementId: "G-P89G4BDBWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Vérification configuration

console.log(
    "Firebase API KEY :",
    firebaseConfig.apiKey
);



// ======================================
// Initialize Firebase
// ======================================


const app = initializeApp(firebaseConfig);



// Analytics (optionnel)

let analytics = null;

try {

    analytics = getAnalytics(app);

}

catch(error){

    console.log(
        "Analytics désactivé"
    );

}



// ======================================
// Auth
// ======================================


const auth = getAuth(app);


const googleProvider =
new GoogleAuthProvider();



// ======================================
// Exports
// ======================================


export {

    auth,

    googleProvider,

    signInWithPopup,

    onAuthStateChanged,

    signOut

};
