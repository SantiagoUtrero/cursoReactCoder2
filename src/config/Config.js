import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDVCIziCNMiceJ3CP42qAMY87fdLN0aT0c",
    authDomain: "asdasd-7d21f.firebaseapp.com",
    projectId: "asdasd-7d21f",
    storageBucket: "asdasd-7d21f.appspot.com",
    messagingSenderId: "296278483769",
    appId: "1:296278483769:web:8f888a75acdf9d6b577ee8",
    measurementId: "G-RK6LR5YWR6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();  
  const storage =firebase.storage();

  export {auth, db, storage};