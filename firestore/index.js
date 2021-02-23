const admin = require("firebase-admin");

const serviceAccount = require("../firestore/movie-app-6cc9d-firebase-adminsdk-n739r-c4f341ad53.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const movies = require("../firestore/movie-list.json");

const db = firestore.collection("movies");

movies.map(async (movie) => {
  try {
    await db.add(movie);
  } catch (error) {
    console.log(error);
  }
});
