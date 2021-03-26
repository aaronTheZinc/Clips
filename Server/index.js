const express = require('express')
const app = express()
const router = require('./Router/bundler')
  app.use('/', router)

  app.listen(5000)


// // 
// const server = require("http").createServer();
// const io = require("socket.io")(server, {
//   transports: ["websocket", "polling"],
// });
// const data = require("../db.json");
// const users = {};
// io.on("connection", (client) => {
//   client.on("username", (username) => {
//     const user = {
//       name: username,
//       id: client.id,
//     };
//     console.log(user);
//     users[client.id] = user;
//     io.emit("connected", user);
//     io.emit("users", Object.values(users));
//   });

//   client.on("send", (message) => {
//     const { text, sender } = message;
//     io.emit("message", data.friends);
//   });

//   client.on("disconnect", () => {
//     const username = users[client.id];
//     delete users[client.id];
//     io.emit("disconnected", client.id);
//   });
// });
// server.listen(5000);

