import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKOoKHM9-PKlTy-yJzgqiAtBgAll_emCE",
  authDomain: "react-app-cursos-4c9f3.firebaseapp.com",
  projectId: "react-app-cursos-4c9f3",
  storageBucket: "react-app-cursos-4c9f3.appspot.com",
  messagingSenderId: "967089927406",
  appId: "1:967089927406:web:a8f099a28a8a068e172fff"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export {
    db,
    googleAuthProvider,
    auth,
}