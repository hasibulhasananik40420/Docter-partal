// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBERji9eA_CcUXiVkgtaHl9SMMbmSdIsVQ",
  authDomain: "final-project-8723b.firebaseapp.com",
  projectId: "final-project-8723b",
  storageBucket: "final-project-8723b.appspot.com",
  messagingSenderId: "878333042547",
  appId: "1:878333042547:web:1e075deaf084abc12a2f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth