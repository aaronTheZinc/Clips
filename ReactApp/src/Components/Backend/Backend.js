import React, { useContext, useEffect } from "react";
import { SocketContext } from "../State/Context";
import { Socket } from "../State/UserProvider";
import {appState} from '../State/Context'
import Cookies from '../State/cookies'
const io = require("socket.io-client");
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);

const readCookies = () => Cookies.cookies.readToken()





const SocketComponent = () => {
    const {
        store:{username: [username, setUsername]},
      } = useContext(appState);
  useEffect(() => {
    const token = readCookies() 
    if(token) {
      socket.emit("handShake", {token: token  });
    }

    socket.on("handShake", ({ user }) => {
      const {data:{username}} = user
      setUsername(username)
    });
  }, []);
  return <></>;
};
export const SocketProvider = ({ children }) => (
  <Socket>
    <SocketComponent />
    {children}
  </Socket>
);
