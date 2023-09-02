// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPskn0Kh5q8DCTORKNc6agK9_VQmuMyzI",
//   authDomain: "otp-project-cfbbe.firebaseapp.com",
//   projectId: "otp-project-cfbbe",
//   storageBucket: "otp-project-cfbbe.appspot.com",
//   messagingSenderId: "1015679410320",
//   appId: "1:1015679410320:web:79976aa834c7c42a8ff815",
//   measurementId: "G-G5ZH0YR3WY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcn8WFOKcDiep6TZC2HJPKVSS5ZpDGh5g",
  authDomain: "finzet1.firebaseapp.com",
  projectId: "finzet1",
  storageBucket: "finzet1.appspot.com",
  messagingSenderId: "696053866468",
  appId: "1:696053866468:web:2470a38365649c898d71f1",
  measurementId: "G-N71GHZHN9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;