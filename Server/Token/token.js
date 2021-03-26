const cache = require('../Cache/index')
const uniqueString = require('unique-string');
 

class Token {
    constructor({ token }) {
        this.CURRENT_TOKEN = token
        this.cache  = cache
        this.sessionTokens = new Array()

        
    }

  token_create = ({ username, socket }) => {
     try {

        const token = uniqueString();
             
            this.cache.post({ 
                key: token,
                data: { username: username, socket: socket}
            })
            return {
                token: token,
                status: 300
            }

        }catch(e) {
            return {
                error: e,
                status: 500
            }
        }
        

    }

    token_destroy = () => {
      try {  
        this.cache.get(this.CURRENT_TOKEN)

      } catch(e) {
          return {
              message: "Session Did Not End Properly",
              error: e

          }
      }
    }
    token_retrieve = () => {
        try {
            const token = this.cache.get(this.CURRENT_TOKEN)
                return token
        } catch (e) {
            return {
                error: 'An Error Occured',
                message: e
            }
        }
    }
}
module.exports = Token