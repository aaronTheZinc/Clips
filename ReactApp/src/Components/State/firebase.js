import app from 'firebase/app';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyCCe3EZBhYzzDDjVhYp2DWULin4ItgIjKA",
  authDomain: "clips-e8ad8.firebaseapp.com",
  projectId: "clips-e8ad8",
  storageBucket: "clips-e8ad8.appspot.com",
  messagingSenderId: "38161657877",
  appId: "1:38161657877:web:30befe0a6d2ef3e4139e1c",
  measurementId: "G-P0Y59FWJ03"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
 
    this.auth = app.auth();
  }
 
  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
 
  doSignOut = () => this.auth.signOut();
 
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
 
export default Firebase;