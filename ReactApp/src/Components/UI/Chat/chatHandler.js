
import { message } from 'antd';
import React from 'react'
import io from 'socket.io-client'
const username = "aaronmarsh"
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"]
});

export default class Chat {

  constructor(userId) {
    this.username = userId

    socket.on("connect", () => {
      socket.emit("username", username);
      console.log('connected!')
    });

    }
    users = () => {
    socket.on("users", users => {

    });
  }
    messages = async() => {
      const result = new Promise((resolve) => {
        socket.on("message", message => {
          resolve(message)
        })
      })

      const messages = result.then(m =>{
        console.log('mess->', m)
        return m
      } )

        return await messages

  }
  send = (message, sender) => {
    socket.emit("send", {text:message, sender: 'aaronmarsh'});
  }
}


  



