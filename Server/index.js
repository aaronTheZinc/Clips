const express = require('express')
const app = express()
const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});
const router = require('./Router/bundler')
const session = require('./Session/index')
  app.use('/app', router)
  app.get('/init_connection', (req, res) => {

    try {

     const {socket, username} = req.query 
     const SessionHandler = new session({clientTkn: ''})
         const initializedToken = SessionHandler.session_init({username: username, socket: socket})
         console.log(initializedToken)
            

         res.send(initializedToken)

        } catch (err) {
          console.error(err)
            res.json({
                message: err,
                status: 500
            })
        }
      })

      // 

const users = {};
io.on("connection", (client) => {
  client.on("username", (username) => {
    const user = {
      name: username,
      id: client.id,
    };
    console.log(user);
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", (message) => {
    const { text, sender } = message;
    io.emit("message", data.friends);
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});




  app.listen(5000)

