import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA6QD2S--CLeZ9Iv84cEf28KsuWTyItoN0",
  authDomain: "login-provincia.firebaseapp.com",
  projectId: "login-provincia",
  storageBucket: "login-provincia.appspot.com",
  messagingSenderId: "326035359031",
  appId: "1:326035359031:web:75c0d0ba97bfd36a0b06b2",
  measurementId: "G-BJSJSF954D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);