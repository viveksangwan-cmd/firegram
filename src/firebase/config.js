import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBbb1jH31RCvGx-a_uY-tIjSKC1JM5aCKM",
    authDomain: "firegram5791.firebaseapp.com",
    projectId: "firegram5791",
    storageBucket: "firegram5791.appspot.com",
    messagingSenderId: "682526827866",
    appId: "1:682526827866:web:d4577cafea588060dd3f63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };