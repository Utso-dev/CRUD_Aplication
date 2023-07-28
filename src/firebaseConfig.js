// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATQBGO7UhV-KiqDp_vrRR6BtFdcx5Xx0k",
  authDomain: "crud-operation-65a1b.firebaseapp.com",
  projectId: "crud-operation-65a1b",
  storageBucket: "crud-operation-65a1b.appspot.com",
  messagingSenderId: "68785666607",
  appId: "1:68785666607:web:cc912c6d02563011c164da",
  measurementId: "G-QY859HH0XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig

