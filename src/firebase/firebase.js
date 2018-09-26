import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyABKQtSQn2HXve7IQ1-izFI-PE4nMulN5k",
    authDomain: "anybody-can-quiz.firebaseapp.com",
    databaseURL: "https://anybody-can-quiz.firebaseio.com",
    projectId: "anybody-can-quiz",
    storageBucket: "anybody-can-quiz.appspot.com",
    messagingSenderId: "355476868226"
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { firebase, provider, database as default };