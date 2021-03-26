const router = require('express').Router()
const rest_api = require('./rest')
const webSocket = require('./socket')
const session = require('../Session/index')
const {authenticate} = require('./auth')
router.use('/api', rest_api)


router.use( (req, res, next) => authenticate({
    req: req,
    res: res,
    next: next
}))


module.exports = router