const express = require('express')
const app = express()
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
const cors = require("cors")
const router = require('./Router/bundler')
const session = require('./Session/index')
  app.use('/app', router)
  app.use(cors)
  
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
io.on('connection', socket => {


  socket.on('handShake', ({ username }) => {
    console.log(username)
    const SessionHandler = new session({clientTkn: ''})
    const initializedToken = SessionHandler.session_init({username: username, socket: socket.id})
    io.emit('handShake', initializedToken)
  })



})




  server.listen(5000, () => {
      console.log('Server Spun Up')
  })
    

