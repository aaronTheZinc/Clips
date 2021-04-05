import React, { useContext } from "react";
import app from "firebase/app";
import "firebase/auth";
import { registerUser } from "../Backend/api";
import { appState } from "./Context";
import Cookies from "./cookies";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
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
export const doCreateUserWithEmailAndPassword = (
  { email, password, username },
  next
) => {
  const user = auth
    .createUserWithEmailAndPassword(email, password)
    .then((client) => {
      alert(client.user.uid)
      registerUser({
        data: { email: email, username: username, uid: client.user.uid},
      });
      next();
    })
    .catch((error) => {
      swal("Uh oh!", error.code, "error");
    })
};

export const doSignInWithEmailAndPassword = async (
  { email, password },
  next
) => {
  const login = await auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("login ->", email, password);
      next();
      // ...
      return userCredential.user.uid;
    })
    .catch((error) => {
      swal("Uh oh!", error.code, "error");
      return {
        error: error,
        message: error.code,
      };
    });
  return login;
};

export const doSignOut = () => {
  try {
    Cookies.cookies.clear();
    auth.signOut().then(() => {
      window.open("/login", "_self");
    });
  } catch (e) {}
};

export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);
