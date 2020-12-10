import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB7CSZMcCimzDnkAkzSrPvN5QsvMBEee-o",
  authDomain: "koftov-todoist.firebaseapp.com",
  projectId: "koftov-todoist",
  storageBucket: "koftov-todoist.appspot.com",
  messagingSenderId: "399744914042",
  appId: "1:399744914042:web:bf9102cb937b75da6ea1c3",
});

export { firebaseConfig as firebase };
