import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Cookies from "./cookies";
import { hub as HubContext } from "./Context";
import { SocketContext, socket, appState } from "./Context";
import { SocketExport } from "../Backend/Backend";
import { io } from "socket.io-client";
import { FirebaseContext } from "./Context";
import { doSignOut, doCreateUserWithEmailAndPassword, fb_auth } from "./firebase";
import cookies from "./cookies";
const baseUrl = "http://localhost:5000";
// This context provider is passed to any component requiring the context

export const HubProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [pageData, setPageData] = useState();
  const [loaded, setLoaded] = useState(false);
  useEffect(async () => {
    const token = Cookies.cookies.readToken();
    const api_result = await axios.get(`${baseUrl}/hub?token${token}`);
    const { data } = api_result;
    if (!data.status === 403) {
      setLoaded(true);
      setPageData(data);
    } else {
      return "Error";
    }
  }, []);
  const { Provider } = HubContext;
  return (
    <Provider value={{ data: "Hello from context!" }}>{children}</Provider>
  );
};

/// Web Socket Provider
export const Socket = ({ children }) => {
  const [token, setToken] = useState("");
  useEffect(() => {}, []);
  const { Provider } = SocketContext;

  return <Provider value={{ token, setToken }}>{children}</Provider>;
};

/// App User State

export const AppState = ({ children }) => {
  const logout = () => {
    alert("Is logging out");
    try {
      doSignOut();
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const { Provider } = appState;
  const [username, setusername] = useState();
  const [uid, setUid] = useState();
  const [token, setToken] = useState();

useEffect(()=> {
  fb_auth.onAuthStateChanged((user) => {
    if (user) {
      setUid(user.uid)
    } else {
      // No user is signed in.
    }
})
}, [])


  const store = {
    username: [username, setusername],
    uid: [uid, setUid],
    token: [token, setToken],
  };
  const actions = {
    logout: () => doSignOut(),
    register: (data) => doCreateUserWithEmailAndPassword(data)
  };
  return (
    <Provider
      value={{
        store:store,
        action: actions,
      }}
    >
      {children}
    </Provider>
  );
};
