import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

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
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default { app, storage, analytics, auth };