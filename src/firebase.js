import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArKmpn565eCyrarMOec3DRekepbqojBjY",
  authDomain: "react-bd-a6a49.firebaseapp.com",
  projectId: "react-bd-a6a49",
  storageBucket: "react-bd-a6a49.appspot.com",
  messagingSenderId: "166485445513",
  appId: "1:166485445513:web:d6aa5f6889bf5bc367af58"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
