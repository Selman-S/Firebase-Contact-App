import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC6SOFFgK3llDluJD5fZe40rWSNJfts76I",
  authDomain: "fir-todo-app-7e267.firebaseapp.com",
  databaseURL: "https://fir-todo-app-7e267-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-todo-app-7e267",
  storageBucket: "fir-todo-app-7e267.appspot.com",
  messagingSenderId: "163755495535",
  appId: "1:163755495535:web:507e06ceed0518b120fd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)