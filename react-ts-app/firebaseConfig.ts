// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// add to use db at firestore
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV2rvuvF-d7IChNc3TFRHYU8i_BvZxvIo",
  authDomain: "chat-71a8e.firebaseapp.com",
  projectId: "chat-71a8e",
  storageBucket: "chat-71a8e.appspot.com",
  messagingSenderId: "269760453079",
  appId: "1:269760453079:web:5b0a857198939514dc9392",
  measurementId: "G-49S7YS3JKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// add db
const db = getFirestore(app);

// export
export default db;

// 複数の場合 例
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;