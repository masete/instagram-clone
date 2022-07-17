import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCbyUK3Aoj0OiUqwdlNMVU3yqjk3O0YXXc",
    authDomain: "instagram-yt-6f7e0.firebaseapp.com",
    projectId: "instagram-yt-6f7e0",
    storageBucket: "instagram-yt-6f7e0.appspot.com",
    messagingSenderId: "911608717020",
    appId: "1:911608717020:web:54cb25717cb53cc8e71e19"
};


const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here i want to call the seed file only once
// seedDatabase(firebase)
export { firebase, FieldValue }