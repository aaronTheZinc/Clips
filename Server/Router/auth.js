const tokenHandler = require('../Token/index')
exports.authenticate = ({req, res, next}) => {
        try {
            const {token} = req.query
            const tokenIsValid = tokenHandler.validate(token, res, next)
             if(tokenIsValid.isValid){
                 console.log('did work')
                 next()
             }
        }
        catch (err) {

        }
    }
