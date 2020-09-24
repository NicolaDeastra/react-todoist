import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBhenJK2hQb4AgVDicqRtn6IUjm1YPtQhE",
  authDomain: "todoist-b7ebc.firebaseapp.com",
  databaseURL: "https://todoist-b7ebc.firebaseio.com",
  projectId: "todoist-b7ebc",
  storageBucket: "todoist-b7ebc.appspot.com",
  messagingSenderId: "843252716933",
  appId: "1:843252716933:web:5ee900fe50a2edb8bf20ec",
});

export { firebaseConfig as firebase };
