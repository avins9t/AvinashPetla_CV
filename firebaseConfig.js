import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDpYKMBV7P89WqFQlu7rp5mkwZZFOkfB30",
  authDomain: "resume-31c60.firebaseapp.com",
  projectId: "resume-31c60",
  storageBucket: "resume-31c60.appspot.com",
  messagingSenderId: "112890645987",
  appId: "1:112890645987:web:67ea05b80173dfd30f64d6",
  measurementId: "G-9Z97EZ6L1F",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
