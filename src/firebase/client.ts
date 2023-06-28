import { initializeApp } from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAZo-myW3EdzR3IjE4s2b-Jkw0PYBxrvlE",
  authDomain: "bp-authantication.firebaseapp.com",
  projectId: "bp-authantication",
  storageBucket: "bp-authantication.appspot.com",
  messagingSenderId: "350025420887",
  appId: "1:350025420887:web:968df710318310f95dd312",
  measurementId: "G-S3SL5DQSNZ"
};

// Initialize Firebase
export let app = initializeApp(firebaseConfig);
