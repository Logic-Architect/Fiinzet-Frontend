import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAKOQSlGqf2qKUq_BDQZ3OyC-FlWe2WzSw",
  authDomain: "fiinzet.firebaseapp.com",
  projectId: "fiinzet",
  storageBucket: "fiinzet.appspot.com",
  messagingSenderId: "1060974703080",
  appId: "1:1060974703080:web:d3c3ba43160a46981df45d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKOQSlGqf2qKUq_BDQZ3OyC-FlWe2WzSw",
//   authDomain: "fiinzet.firebaseapp.com",
//   projectId: "fiinzet",
//   storageBucket: "fiinzet.appspot.com",
//   messagingSenderId: "1060974703080",
//   appId: "1:1060974703080:web:d3c3ba43160a46981df45d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app