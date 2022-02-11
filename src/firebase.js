// import firebase from 'firebase';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA1wpLCaBcN4tKB4KbNesyF1cmamTawE8U",
//   authDomain: "challenge-d419c.firebaseapp.com",
//   projectId: "challenge-d419c",
//   storageBucket: "challenge-d419c.appspot.com",
//   messagingSenderId: "485309350132",
//   appId: "1:485309350132:web:0d2425ad339190351d9ea1",
//   measurementId: "G-0FHR9R05RS"
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db,auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1wpLCaBcN4tKB4KbNesyF1cmamTawE8U",
  authDomain: "challenge-d419c.firebaseapp.com",
  projectId: "challenge-d419c",
  storageBucket: "challenge-d419c.appspot.com",
  messagingSenderId: "485309350132",
  appId: "1:485309350132:web:0d2425ad339190351d9ea1",
  measurementId: "G-0FHR9R05RS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const auth = firebase.auth();

export default app;
