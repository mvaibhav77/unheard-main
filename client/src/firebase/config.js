// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQ_i3Vq6e1h-LxZs-05buI6eZDKXyvf0",
  authDomain: "database-learning-gallery.firebaseapp.com",
  projectId: "database-learning-gallery",
  storageBucket: "database-learning-gallery.appspot.com",
  messagingSenderId: "621691753533",
  appId: "1:621691753533:web:87d4a1075c2fdfde590654"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);