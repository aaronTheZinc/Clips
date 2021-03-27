import React from 'react';
import { createStore } from 'redux'
import axios from 'axios'
import io from 'socket.io-client'
const store = createStore(todos, ['Use Redux'])
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"]
});



const injectToken = () => { 
  socketRef.current = io.connect("http://localhost:5000")
  socketRef.current.on("handShake", (token) => {
    document.cookie =`session_toke=${token}`
  })

}



