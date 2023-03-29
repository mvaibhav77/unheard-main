// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAixWmnbKf9maVQcoQZBR0f0xEopZvwScc",
  authDomain: "unheard-org-c576e.firebaseapp.com",
  projectId: "unheard-org-c576e",
  storageBucket: "unheard-org-c576e.appspot.com",
  messagingSenderId: "318515316651",
  appId: "1:318515316651:web:d5eb2321d76cfd6f62b4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);