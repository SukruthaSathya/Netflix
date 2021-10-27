import firebase from 'firebase'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtxa-4xUQKMCVHNn1odE-hXiS8Nrd6MCY",
    authDomain: "netflix-63a3e.firebaseapp.com",
    projectId: "netflix-63a3e",
    storageBucket: "netflix-63a3e.appspot.com",
    messagingSenderId: "606910190372",
    appId: "1:606910190372:web:b7c5a7f7755b2f270d59b1",
    measurementId: "G-LF02N48TPP"
  };

  export default firebase.initializeApp(firebaseConfig)