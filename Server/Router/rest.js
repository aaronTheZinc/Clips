const router = require('express').Router()
const session = require('../Session/index')
 router.get('/', (req, res) => {
     res.json({
         data: "Sheesh"
     })
 })

 router.get('/init_connection', (req, res) => {

    try {

     const {socket, username} = req.query 
     const SessionHandler = new session({clientTkn: null})
         const initializedToken = SessionHandler.session_init({username: username, socket: socket})
            

         res.send({
             token: initializedToken,
             status: 200
         })

        } catch (err) {
            res.json({
                message: err,
                status: 500
            })
        }

      
     
 })
 module.exports = router