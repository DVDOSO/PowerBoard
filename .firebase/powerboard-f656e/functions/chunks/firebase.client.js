import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCWeFlv_4HU6bSwLEst5YUHnm4vGtFF7Ds",
  authDomain: "powerboard-f656e.firebaseapp.com",
  projectId: "powerboard-f656e",
  storageBucket: {}.VITE_STORAGEBUCKET,
  messagingSenderId: "558956009954",
  appId: "1:558956009954:web:5faf6b5195f9ccec19c1bb",
  measurementId: "G-96DCFVZS24",
  databaseURL: "https://powerboard-f656e-default-rtdb.firebaseio.com"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export {
  database as d
};
