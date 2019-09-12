import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"



var firebaseConfig = {
  apiKey: "AIzaSyAhFZDpuax82fishOnszL4AngLxwuYWBAY",
  authDomain: "e-commerece-app.firebaseapp.com",
  databaseURL: "https://e-commerece-app.firebaseio.com",
  projectId: "e-commerece-app",
  storageBucket: "e-commerece-app.appspot.com",
  messagingSenderId: "934674094434",
  appId: "1:934674094434:web:a5f5173f4e93cc30ef343b"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);