import firebase from "firebase";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBYelSaT6zAbNjewRF7TsR6oXhqqJLkNDw",
  authDomain: "login-page-7567e.firebaseapp.com",
  projectId: "login-page-7567e",
  storageBucket: "login-page-7567e.appspot.com",
  messagingSenderId: "932353704249",
  appId: "1:932353704249:web:57254751a6aaa9106d28e8"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;