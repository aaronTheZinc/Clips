import React from "react";
const io = require("socket.io-client");
const ENDPOINT = "http://localhost:5000";

class Socket {
  constructor() {
    this.socket = io(ENDPOINT);
    this.state = {
      isConnected: false,
    };
  }
  connect = () => {
    this.socket.on("connection", () => {
      this.state.isConnected = true;
    });
  };
  handShake = () => {

        this.socket.emit("handShake", { username: "aaronmarsh12" });

            this.socket.on("handShake", (data) => {
              console.log(data);
            });
  

     };
}

export default Socket;
