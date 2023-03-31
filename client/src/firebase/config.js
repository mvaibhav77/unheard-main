// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsqkWa-PVKJ9tHY0tz3ftOku3LdnWwT0c",
  authDomain: "unheard-org.firebaseapp.com",
  projectId: "unheard-org",
  storageBucket: "unheard-org.appspot.com",
  messagingSenderId: "1079769784526",
  appId: "1:1079769784526:web:61a7912474210d87c4f09f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);