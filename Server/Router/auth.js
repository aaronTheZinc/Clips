const session = require('../Session/index')
exports.authenticate = ({req, res, next}) => {
        try {
            const {token: req_token} = req.query; !req_token ? null : res.json({error: "Error, No Token Provided"})
            const Session_Manager = new session(req_token)
            const {isAuthroized} = Session_Manager
              if(isAuthroized) {
                 next()
              } else {
                  res.json({
                      message: 'Access Denied', 
                      status: '403'
                  })
              }
        } catch (e) {
            res.json({
                message: 'An Error Occured',
                status: '500'
            })
        }
     
    }

