const express = require("express");
const app = express();
const server = require("http").createServer(app);
const tokenHandler = require("./Token/index");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
const cors = require("cors");
const router = require("./Router/bundler");
app.use("/app", router);
app.use(cors());

app.get("/init_connection", (req, res) => {
  try {
    const { socket, username } = req.query;
    const SessionHandler = new session({ clientTkn: "" });
    const initializedToken = tokenHandler.createToken({
      username: "aaronmarsh",
    });
    console.log(initializedToken);

    res.send(initializedToken);
  } catch (err) {
    console.error(err);
    res.json({
      message: err,
      status: 500,
    });
  }
});

//

const users = {};
io.on("connection", (socket) => {
  console.log(socket.id);


  socket.on("handShake", ({ token }) => {
    const user = tokenHandler.authenticate_token(token);
    console.log(user)
    io.emit("handShake", { user: user });
  });



});

server.listen(5000, () => {
  console.log("Server Spun Up");
});
