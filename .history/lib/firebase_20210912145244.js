import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyANjmnRroAyXa3Ee_xoMeI2n1ce1zUom_I',
  authDomain: 'fast-feedback-17429.firebaseapp.com',
  projectId: 'fast-feedback-17429',
  storageBucket: 'fast-feedback-17429.appspot.com',
  messagingSenderId: '1077734782836',
  appId: '1:1077734782836:web:2b8364796a44b8e2785e21'
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
