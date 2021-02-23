import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0UX72lM5PVOWfMlgyjkjH5rxUSbWeI80",
  authDomain: "movie-app-6cc9d.firebaseapp.com",
  projectId: "movie-app-6cc9d",
  storageBucket: "movie-app-6cc9d.appspot.com",
  messagingSenderId: "898678752080",
  appId: "1:898678752080:web:0ffa5f24ff71875d996255",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
