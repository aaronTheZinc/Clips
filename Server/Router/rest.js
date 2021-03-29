const router = require('express').Router()
const {authenticate} = require('./auth')
const tokenHandler = require('../Token/index')
router.use((req, res, next) => authenticate({
    req: req,
    res: res,
    next: next
}))

 router.get('/friends', (req, res) => {
     const {token} = req.query;
      const data = tokenHandler.getData(token)
       res.json({
           friends: {
               username: data.username
           }
       })
 })



 module.exports = router