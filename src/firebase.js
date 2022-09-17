import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxcL0J0CObueBkGq41RFPUrxZ56xkMaX4",
  authDomain: "react-phone-auth-ec33e.firebaseapp.com",
  projectId: "react-phone-auth-ec33e",
  storageBucket: "react-phone-auth-ec33e.appspot.com",
  messagingSenderId: "19863532046",
  appId: "1:19863532046:web:e7fd6bb7e081c25175825f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;