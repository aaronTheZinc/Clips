import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import axios from "axios";
import Cookies from "./cookies";
import { hub as HubContext } from "./Context";
import { SocketContext, socket, appState } from "./Context";
import { SocketExport } from "../Backend/Backend";
import { getNewToken, GetNewToken, registerUser } from "../Backend/api";
import { io } from "socket.io-client";
import { FirebaseContext } from "./Context";
import {
  doSignOut,
  doCreateUserWithEmailAndPassword,
  fb_auth,
  doSignInWithEmailAndPassword,
} from "./firebase";
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
export const AppState = ({ children }) => {
  const template = {
    auth: {
      uid: "",
      isAuth: false,
    },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "setUid":
        return {
          auth: {
            uid: action.value,
            isAuth: true,
            
          },
        };
      case 'setUsername': 
        return {
          auth: {
            username: action.value
          }
        }
      case 'isAuth':
        return {
          auth: {
            isAuth: false
          }
        }  
      case "logout":
        doSignOut();
        return {
          auth: {
            isAuth: false,
            uid: "",
          },
        };
    }
  };

  const actions = {
    login: (data, next) => doSignInWithEmailAndPassword(data, next),
    register: (data) => doCreateUserWithEmailAndPassword(data)
  };
  const [state, dispatch] = useReducer(reducer, template);

  //// Initializers

  useEffect(() => {
    //add is logged in auth
    fb_auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid } = authUser;
        dispatch({ type: "setUid", value: uid });
        getNewToken(uid);
      } else {
        dispatch({ type: "isAuth", value: false });
      }
    });
  }, []);

  const { Provider } = appState;
  return (
    <Provider
      value={{
        state,
        dispatch,
        actions: actions,
      }}
    >
      {children}
    </Provider>
  );
};
