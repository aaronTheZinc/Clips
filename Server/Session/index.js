const token = require('../Token/token')

class session {
    constructor({ clientTkn }){

        this.isAuthroized = false
        this.token = new token({token: clientTkn})
        this.client_token = ''
    }

    session_init = ({username , socket}) => this.token.token_create({username: username, socket: socket})

    session_destroy = () => this.token.token_destroy(this.client_token)

    authorize = () => {
     if(!this.token.token_destroy().error){
         this.isAuthroized = true
     } else {
         this.isAuthroized = false
     }

    }

}
module.exports = session;