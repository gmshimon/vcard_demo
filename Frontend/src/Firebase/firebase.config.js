// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIPIGCIqn59ZX-zR_xlh2NWKjeE8CFzQw",
  authDomain: "vcard-cec8a.firebaseapp.com",
  projectId: "vcard-cec8a",
  storageBucket: "vcard-cec8a.appspot.com",
  messagingSenderId: "448747931116",
  appId: "1:448747931116:web:547737c8162115abc2ecc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;