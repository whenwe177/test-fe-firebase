// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgcyGTtPE1qzDRXEYqDry8JgevPHzI9g4",
  authDomain: "test-authentication-a1e77.firebaseapp.com",
  projectId: "test-authentication-a1e77",
  storageBucket: "test-authentication-a1e77.appspot.com",
  messagingSenderId: "452222926094",
  appId: "1:452222926094:web:4cf2f2f71a171460d7eb5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }