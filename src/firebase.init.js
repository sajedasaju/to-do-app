// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBip1QTTPOoyqcB2zvTsS_jmSgcFWLWiSM",
    authDomain: "to-do-c27df.firebaseapp.com",
    projectId: "to-do-c27df",
    storageBucket: "to-do-c27df.appspot.com",
    messagingSenderId: "807375787055",
    appId: "1:807375787055:web:c2cc23ea3db1da3e5062da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;