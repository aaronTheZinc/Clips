import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import Cookies from "./cookies";
import { hub as HubContext } from "./Context";
import { SocketContext, socket, appState } from "./Context";
import { SocketExport } from "../Backend/Backend";
import { io } from "socket.io-client";
import { FirebaseContext } from "./Context";
import Firebase from './firebase'
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
  const [username, setUsername] = useState("");
  const actions = {
    logout: () => {},
    login: async (payload) => {
      const result = await axios.post(`${baseUrl}/register`, payload);
      const { data } = result;
      console.log(data);
    },
  };
  const store = {
    username: [username, setUsername],
  };
  const { Provider } = appState;
  return (
    <Provider
      value={{
        store: {
          username: [username, setUsername],
        },
        action: actions,
      }}
    >
      {children}
    </Provider>
  );
};

export const FirebaseProvider = ({ children }) => {
  const { Provider } = FirebaseContext;
  return <Provider value={new Firebase()}>
    {children}
  </Provider>;
};
