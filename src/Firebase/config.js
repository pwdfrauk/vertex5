// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWXSpslS6jRvwX04hRcUI1dq6sjgyUDBA",
  authDomain: "vertex5.firebaseapp.com",
  projectId: "vertex5",
  storageBucket: "vertex5.appspot.com",
  messagingSenderId: "263888467121",
  appId: "1:263888467121:web:5b38ea1044f689eb491e90"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;
// export const db = getFirestore(app);
