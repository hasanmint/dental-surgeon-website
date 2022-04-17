// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTt5szIRGx0PHVS6SjYVvVPy8jIvufu8w",
    authDomain: "dental-surgeon-e4a55.firebaseapp.com",
    projectId: "dental-surgeon-e4a55",
    storageBucket: "dental-surgeon-e4a55.appspot.com",
    messagingSenderId: "937823132879",
    appId: "1:937823132879:web:6894db3f5b48c4cfab2bba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

