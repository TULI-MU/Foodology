// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvAzufTLf3pYgqPjjZag_HWAH_Lo2zUj4",
    authDomain: "foodology-service-9f7f1.firebaseapp.com",
    projectId: "foodology-service-9f7f1",
    storageBucket: "foodology-service-9f7f1.appspot.com",
    messagingSenderId: "661569717377",
    appId: "1:661569717377:web:11bc06aa259254cea43980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;