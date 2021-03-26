const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

class Cache {
    constructor() {
        
        this.didStart = false
    
    }
    createSessionCache = () =>{
        console.log("New Session Cache Has Started!")
        this.didStart = true 
    }

    post = ({ data, key}) => {
        try {

            myCache.set( key, data )

        } catch (error) {
            console.log(`Cache Error ${error}`)
            return error
        }
    }

    get = ({ key }) => {
        try {
            const result = myCache.get(key); 
              console.log()
        }
        catch (error) {
            console.log(`Cached Error ${error}`)
            return error
        }
    }

}

module.exports = new Cache()