import React, { useContext } from "react";
import app from "firebase/app";
import "firebase/auth";
import { registerUser } from "../Backend/api";
import { appState } from "./Context";
import Cookies from "./cookies";
import { useHistory } from "react-router-dom";
const config = {
  apiKey: "AIzaSyCCe3EZBhYzzDDjVhYp2DWULin4ItgIjKA",
  authDomain: "clips-e8ad8.firebaseapp.com",
  projectId: "clips-e8ad8",
  storageBucket: "clips-e8ad8.appspot.com",
  messagingSenderId: "38161657877",
  appId: "1:38161657877:web:30befe0a6d2ef3e4139e1c",
  measurementId: "G-P0Y59FWJ03",
};

app.initializeApp(config);

const auth = app.auth();
export const fb_auth = auth;
export const doCreateUserWithEmailAndPassword = ({
  email,
  password,
  username,
}) => {
  const user = auth.createUserWithEmailAndPassword(email, password);
  console.log(auth.currentUser.uid);
  registerUser({
    data: { email: email, username: username, uid: auth.currentUser.uid },
  });
};

export const doSignInWithEmailAndPassword = async({email, password}) => {
 const login = await auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
console.log('login ->', email, password)
    // setUid(userCredential.user.uid);
    //  window.open('/hub', '_self')
    // Signed in
   console.log(userCredential.user.uid)
    // ...
    return userCredential.user.uid
  })
  .catch((error) => {
    console.log('login ->', email, password)
    console.log(error)
    return {
      error: error,
      message: error.code
    }
  });
  return login
}
 

export const doSignOut = () => {
  try {
    Cookies.cookies.clear();
    auth.signOut().then(() => {
      window.open('/login', '_self')
    });
  } catch (e) {
  }
};

export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
