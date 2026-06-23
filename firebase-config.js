// Firebase Web SDK Imports (Modular version from official CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// YOUR FIREBASE CONFIGURATION GOES HERE
// You can get this object from your Firebase Console:
// Project Settings -> General -> Your Apps -> Web App configuration snippet.
const firebaseConfig = {
  apiKey: "AIzaSyAVvZezV6AgpneQDKVovETMrSgyWWBaMdE",
  authDomain: "cbt-mck-test.firebaseapp.com",
  projectId: "cbt-mck-test",
  storageBucket: "cbt-mck-test.firebasestorage.app",
  messagingSenderId: "1086060695113",
  appId: "1:1086060695113:web:74274308afe77647437998",
  measurementId: "G-NQM9T4FZ01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);
export default db;
