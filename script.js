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


const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,

    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,

    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,

    appId: import.meta.env.VITE_FIREBASE_APP_ID,

    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

};



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
