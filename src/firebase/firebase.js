import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVxzCYHKR2tNISbGkScy1da6bQhDBdKF8",
    authDomain: "tiktok-emrichmp.firebaseapp.com",
    projectId: "tiktok-emrichmp",
    storageBucket: "tiktok-emrichmp.appspot.com",
    messagingSenderId: "981667778815",
    appId: "1:981667778815:web:9dedd9bc255ee39b43fcca",
    measurementId: "G-E4SBWH6DSY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;