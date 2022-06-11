// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpWFTgMS79hfYU9Jpp0jKx-5YKfCMzTE",
  authDomain: "house-marketplace-app-3c13d.firebaseapp.com",
  projectId: "house-marketplace-app-3c13d",
  storageBucket: "house-marketplace-app-3c13d.appspot.com",
  messagingSenderId: "395032985209",
  appId: "1:395032985209:web:cdd81b3fb2adfff83f1ea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
