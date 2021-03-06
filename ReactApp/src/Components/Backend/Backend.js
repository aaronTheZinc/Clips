import React, { useContext, useEffect } from "react";
import { SocketContext } from "../State/Context";
import { AppState as Socket } from "../State/UserProvider";
import {appState} from '../State/Context'
import Cookies from '../State/cookies'
const io = require("socket.io-client");
const baseUrl = process.env.BASE_URL
const socket = io(baseUrl);

const readCookies = () => Cookies.cookies.readToken()





const SocketComponent = () => {
    // const {
      //   store:{username: {username, setUsername}},
      // } = useContext(appState);
  useEffect(() => {
    const token = readCookies() 
    if(token) {
      socket.emit("handShake", {token: token  });
    }

    socket.on("handShake", ({ user }) => {
      // const {data:{username}} = user
      // setUsername(username)
    });
  }, []);
  return <></>;
};
export const SocketProvider = ({ children }) => {
    const { state, dispatch } = useContext(appState);
    console.log('state -- ', state)
    useEffect(() => {
    const token = readCookies();
    if (token) {
      socket.emit("handShake", { token: token });
    }

    socket.on("handShake", ({ user }) => {
      console.log(user)
      dispatch({type: 'setUsername', value: user.data.username})
    });
  }, []);
return (
<Socket >
{children}
</Socket>
    
  
)
};

// export const SocketProvider = ({ children }) => {
//   const { dispatch } = useContext(appState);
//   useEffect(() => {
//     const token = readCookies();
//     if (token) {
//       socket.emit("handShake", { token: token });
//     }

//     socket.on("handShake", ({ username }) => {
//       alert(username)
//       dispatch({type: 'setUsername', value: username})
//     });
//   }, []);
//   return (children)
// }
