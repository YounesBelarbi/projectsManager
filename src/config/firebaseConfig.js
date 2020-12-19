import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDlaBW2G4nC4Xjw1lLUBh8yqc200ibS1wc",
    authDomain: "projectsmanager-8e8ee.firebaseapp.com",
    projectId: "projectsmanager-8e8ee",
    storageBucket: "projectsmanager-8e8ee.appspot.com",
    messagingSenderId: "936462727331",
    appId: "1:936462727331:web:2a5eb4fd95dddbbeeca716",
    measurementId: "G-NFV8H1YT8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase