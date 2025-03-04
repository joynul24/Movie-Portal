// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDyJngh5E-cWUOwZytv-FqvK7rZoXqGQps",
//   authDomain: "a10-movie-portal.firebaseapp.com",
//   projectId: "a10-movie-portal",
//   storageBucket: "a10-movie-portal.firebasestorage.app",
//   messagingSenderId: "287432129364",
//   appId: "1:287432129364:web:c4e1fd3925d74aef5b66c1"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);