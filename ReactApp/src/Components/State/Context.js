import React, {createContext} from 'react'
import socketio from "socket.io-client";

export const SocketContext = createContext();
export const hub = createContext(null);
export const appState = createContext();
export const FirebaseContext = createContext(null);

 
