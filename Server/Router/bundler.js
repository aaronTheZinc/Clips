const router = require('express').Router()

router.get('/', (req, res) => {


router.use('/api')
    router.get('api', (req, res) => {
            res.send('hi')
    })
    router.get('/socket',(req, res)=> {

    })

    res.send({
        mes: 'Hello World'
    })


})

module.exports = router