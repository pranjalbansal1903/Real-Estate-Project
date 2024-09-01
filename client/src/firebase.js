// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-8d17a.firebaseapp.com",
  projectId: "real-estate-app-8d17a",
  storageBucket: "real-estate-app-8d17a.appspot.com",
  messagingSenderId: "869805676531",
  appId: "1:869805676531:web:70ee0f7ff8f95bcbb72486"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);