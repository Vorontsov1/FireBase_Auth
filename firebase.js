import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDButfO7wdPHJeI1yeORhDUzU9c_zmZTrQ",
  authDomain: "fir-auth-dc3aa.firebaseapp.com",
  projectId: "fir-auth-dc3aa",
  storageBucket: "fir-auth-dc3aa.appspot.com",
  messagingSenderId: "767449387472",
  appId: "1:767449387472:web:debc61bc13ba747f0ea9d5",
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { auth };
