// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKwSXfoT1qQrBxsvTX44bKqdZbkN3menI",
    authDomain: "independent-service-prov-17ef7.firebaseapp.com",
    projectId: "independent-service-prov-17ef7",
    storageBucket: "independent-service-prov-17ef7.appspot.com",
    messagingSenderId: "682752143105",
    appId: "1:682752143105:web:bceb1cfe644748b6483500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;