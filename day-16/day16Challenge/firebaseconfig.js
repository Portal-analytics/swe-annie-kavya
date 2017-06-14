import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBNGpj1N2abE-QGpLwVUDs8n19eKU9EsPQ",
  authDomain: "challenge18-93394.firebaseapp.com",
  databaseURL: "https://challenge18-93394.firebaseio.com",
  projectId: "challenge18-93394",
  storageBucket: "challenge18-93394.appspot.com",
  messagingSenderId: "487457882442"
};

export const firebaseData = firebase.initializeApp(config);
