// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx4GGAI95SOyeGwdfE6DBStmOQoHsimwc",
  authDomain: "a11-art-craft.firebaseapp.com",
  projectId: "a11-art-craft",
  storageBucket: "a11-art-craft.appspot.com",
  messagingSenderId: "859135532282",
  appId: "1:859135532282:web:0d24495157388bf646bd43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;