// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIrweCDswrdZPfyDYs9M03DOS32rBq0a8",
  authDomain: "otp-project-54fcf.firebaseapp.com",
  projectId: "otp-project-54fcf",
  storageBucket: "otp-project-54fcf.firebasestorage.app",
  messagingSenderId: "944966569191",
  appId: "1:944966569191:web:48f144a7890604ec47e642",
  measurementId: "G-9FRYYC5PLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
