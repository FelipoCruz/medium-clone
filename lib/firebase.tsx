
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


	// your firebase congif here
const firebaseConfig = {
  apiKey: "AIzaSyCqdhSWdjWsmSX-3g99SL84UbQK6WOfxeA",
  authDomain: "medium-clone-f8e67.firebaseapp.com",
  projectId: "medium-clone-f8e67",
  storageBucket: "medium-clone-f8e67.appspot.com",
  messagingSenderId: "872843987924",
  appId: "1:872843987924:web:880f97009435b716cca441"
}

// avoid next to initialize firebase more than one time:
if(!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();



