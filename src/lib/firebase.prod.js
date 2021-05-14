import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAF5xvOOFg2iw7Yl7ZdZGzbUuI6wods5t4",
  authDomain: "netflix-clone-yt-800ed.firebaseapp.com",
  projectId: "netflix-clone-yt-800ed",
  storageBucket: "netflix-clone-yt-800ed.appspot.com",
  messagingSenderId: "817297388922",
  appId: "1:817297388922:web:ce8de6eed525b3f31252c3",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
