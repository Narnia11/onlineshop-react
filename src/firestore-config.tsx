// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCRQJWn4_VRCGpQk81EViJTpXAtT7SElTM",
  authDomain: "cool-fashion-6cf36.firebaseapp.com",
  projectId: "cool-fashion-6cf36",
  storageBucket: "cool-fashion-6cf36.appspot.com",
  messagingSenderId: "325585364324",
  appId: "1:325585364324:web:dda741e0951dc030844671",
  measurementId: "G-NMJ2PZ5M3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
const analytics = getAnalytics(app);
export const db=getFirestore(app)