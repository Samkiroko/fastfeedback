// import * as firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
//   });
// }

// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANjmnRroAyXa3Ee_xoMeI2n1ce1zUom_I',
  authDomain: 'fast-feedback-17429.firebaseapp.com',
  projectId: 'fast-feedback-17429',
  storageBucket: 'fast-feedback-17429.appspot.com',
  messagingSenderId: '1077734782836',
  appId: '1:1077734782836:web:2b8364796a44b8e2785e21'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
