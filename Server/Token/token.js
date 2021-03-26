const cache = require('../Cache/index')
const uniqueString = require('unique-string');
 

class Token {
    constructor({ token }) {
        this.CURRENT_TOKEN = token
        this.cache  = new cache()
        this.sessionTokens = new Array()

        cache.createSessionCache()
    }

  token_create = ({ uid }) => {
     try {
        const token = uniqueString();
             
            this.cache.post({ 
                key: token,
                dara: uid
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

    token_destroy = (token) => {
      try {  
        this.cache.get()

      } catch(e) {
          return {
              message: "Session Did Not End Properly",
              error: e

          }
      }
    }
}
module.exports = Token