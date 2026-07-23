// ======================================
// FIFA TV - Firebase Authentication
// script.js
// ======================================


// Firebase imports

import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





// ======================================
// Firebase Configuration
// ======================================


const firebaseConfig = {


    apiKey: "TON_API_KEY",

    authDomain:
    "TON_PROJECT.firebaseapp.com",

    projectId:
    "TON_PROJECT_ID",

    storageBucket:
    "TON_PROJECT.appspot.com",

    messagingSenderId:
    "TON_MESSAGING_SENDER_ID",

    appId:
    "TON_APP_ID"


};





// ======================================
// Initialize Firebase
// ======================================


const app =
initializeApp(firebaseConfig);





// Firebase Auth

const auth =
getAuth(app);





// Google Provider

const googleProvider =
new GoogleAuthProvider();





// ======================================
// Exports pour login.html
// ======================================


export {

    auth,

    googleProvider,

    signInWithPopup,

    onAuthStateChanged,

    signOut

};
