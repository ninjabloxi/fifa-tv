import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0wGD-T7bzHGuSu7qxw7qEe-tExpqz0p4",
    authDomain: "fifa-tv-database.firebaseapp.com",
    projectId: "fifa-tv-database",
    storageBucket: "fifa-tv-database.firebasestorage.app",
    messagingSenderId: "916734081043",
    appId: "1:916734081043:web:13a741a8747ace5d3ee7e6",
    measurementId: "G-P89G4BDBWX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider =
    new GoogleAuthProvider();

export {
    auth,
    googleProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
};
