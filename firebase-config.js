// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXbIKjXLs9wlcWSCEqudkf2EE0nWKAuyE",
    authDomain: "m-vet-blog.firebaseapp.com",
    projectId: "m-vet-blog",
    storageBucket: "m-vet-blog.appspot.com",
    messagingSenderId: "618017387126",
    appId: "1:618017387126:web:f867fc8d6a3c5146cbe557",
    measurementId: "G-LNERF1K8F0"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
