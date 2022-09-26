import {initializeApp }from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const Gprovider = new GoogleAuthProvider();
const Fbprovider=new FacebookAuthProvider
const firebaseConfig = {
  apiKey: "AIzaSyAkuirQugriC3XPGUK9zdNX8CgK4I61zsE",
  authDomain: "bookmyshow-1383c.firebaseapp.com",
  projectId: "bookmyshow-1383c",
  storageBucket: "bookmyshow-1383c.appspot.com",
  messagingSenderId: "444644683220",
  appId: "1:444644683220:web:2355dfbbe620f85af53a41",
  measurementId: "G-12JHPY8SKP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth,Gprovider,Fbprovider}