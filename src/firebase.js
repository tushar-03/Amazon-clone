import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDP1ar3BI4tOMqSkkH4uFmMoFR-Q6oHKqs",
    authDomain: "clone-622df.firebaseapp.com",
    projectId: "clone-622df",
    storageBucket: "clone-622df.appspot.com",
    messagingSenderId: "687588371415",
    appId: "1:687588371415:web:92c52c2a6daa1f5f307992",
    measurementId: "G-6HGT431K86"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };