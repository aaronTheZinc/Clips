const firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyCCe3EZBhYzzDDjVhYp2DWULin4ItgIjKA",
    authDomain: "clips-e8ad8.firebaseapp.com",
    projectId: "clips-e8ad8",
    storageBucket: "clips-e8ad8.appspot.com",
    messagingSenderId: "38161657877",
    appId: "1:38161657877:web:30befe0a6d2ef3e4139e1c",
    measurementId: "G-P0Y59FWJ03"
  };

  const app = firebase.default.initializeApp(firebaseConfig)

  module.exports = app.firestore()