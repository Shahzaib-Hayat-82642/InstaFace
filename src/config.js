// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBXVhbryHRz1ItTSs4Do4aowGMDcrduYNY",
  authDomain: "instaface-84e34.firebaseapp.com",
  projectId: "instaface-84e34",
  storageBucket: "instaface-84e34.appspot.com",
  messagingSenderId: "422360019264",
  appId: "1:422360019264:web:8a80462f37de58aaba0aa5",
  measurementId: "G-B4ZSL8RJRM",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
