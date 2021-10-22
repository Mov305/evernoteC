import 'firebase/compat/firestore';
import 'firebase/compat/database'
import  firebase  from "firebase/compat/app";



const firebaseConfig = {

  apiKey: "AIzaSyB_JTZZxi3BHO3hUYyjEtTeg-qrzK-mXh4",

  authDomain: "evernote-clone-c0890.firebaseapp.com",

  projectId: "evernote-clone-c0890",

  storageBucket: "evernote-clone-c0890.appspot.com",

  messagingSenderId: "249177347565",

  appId: "1:249177347565:web:069d85f4fc5eb23e0cc3e4"

};


// Initialize Firebase

const app =firebase.initializeApp(firebaseConfig)


export default app
