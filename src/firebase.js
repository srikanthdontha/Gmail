import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2EwNJzPKUpYb2C9iTCdqsJcL9ozloPPw",
  authDomain: "g-mail-snipercoder.firebaseapp.com",
  projectId: "g-mail-snipercoder",
  storageBucket: "g-mail-snipercoder.appspot.com",
  messagingSenderId: "535668201383",
  appId: "1:535668201383:web:a96aa8788731659987c882",
  measurementId: "G-X81Q9LZHFS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
